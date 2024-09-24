import React, { useState, useEffect, useCallback } from 'react';
import Loader from '../Loader/Loader';
import { ListContainer, NoData, UserImage, UserItem, UserName } from './User.style';

interface User {
    id: string;
    first_name: string;
    last_name: string;
    avatar: string;
}

const UserList: React.FC = () => {
    const [users, setUsers] = useState<User[]>([]);
    const [error, setError] = useState<string | null>(null);
    const [loading, setLoading] = useState(false);
    const [page, setPage] = useState(1); // Current page
    const [totalPages, setTotalPages] = useState(0); // Total pages

    // Function to fetch users based on page number
    const fetchUsers = useCallback(async () => {
        setLoading(true);
        try {
            const response = await fetch(`https://reqres.in/api/users?page=${page}`);
            const usersList = await response.json();
            setUsers((prevUsers) => [...prevUsers, ...usersList.data]); // Append new users to existing users
            setTotalPages(usersList.total_pages);
            setLoading(false);
        } catch (error: any) {
            setError(error.message);
            setLoading(false);
        }
    }, [page]);

    useEffect(() => {
        fetchUsers();
    }, [fetchUsers]);

    // Handle scrolling to the bottom of the page
    useEffect(() => {
        const handleScroll = () => {
            if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 2 && !loading && page < totalPages) {
                setPage((prevPage) => prevPage + 1); // Increment the page number
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [loading, page, totalPages]);

    if (error) {
        return <div>Error: {error}</div>;
    }

    return (
        <div>
            <ListContainer>
                {users.map((user) => (
                    <UserItem key={user.id}>
                        <UserImage src={user.avatar} alt={user.first_name} />
                        <UserName>{user.first_name} {user.last_name}</UserName>
                    </UserItem>
                ))}
                { page === totalPages && 
                <NoData>No more data</NoData>}
            </ListContainer>
            {loading && <Loader />} {/* Show loader while fetching new data */}
        </div>
    );
};

export default UserList;
