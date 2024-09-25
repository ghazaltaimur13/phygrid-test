import React, { useState, useEffect, useCallback } from 'react';
import Loader from '../Loader/Loader';
import ErrorComponent from '../ErrorComponent/ErrorComponent';
import { API_URL, API_ROUTES, PAGINATION } from '../../constants/appConstants';
import { ListContainer, NoData, UserImage, UserItem, UserName, NextButton } from './User.style';

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
    const [page, setPage] = useState(PAGINATION.PAGE); // Current page
    const [totalPages, setTotalPages] = useState(PAGINATION.TOTAL_PAGES); // Total pages
    const [isScrollable, setIsScrollable] = useState(true); // Check if content is scrollable

    // Function to fetch users based on page number
    const fetchUsers = useCallback(async () => {
        setLoading(true);
        try {
            const response = await fetch(`${API_URL}${API_ROUTES.GET_USER}?page=${page}`);
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

    // Check if the page is scrollable
    useEffect(() => {
        const isPageScrollable = (document.body.scrollHeight - 100 > window.innerHeight);
        setIsScrollable(isPageScrollable);
    }, [users]);

    // Handle the "Next" button click
    const handleNextClick = () => {
        if (!loading && page < totalPages) {
            setPage((prevPage) => prevPage + 1); // Increment page on button click
        }
    };

    if (error) {
        return <ErrorComponent />;
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
                {page === totalPages && <NoData>No more data</NoData>}
            </ListContainer>
            {loading && <Loader />} {/* Show loader while fetching new data */}
            {!isScrollable && page < totalPages && !loading && (
                <NextButton onClick={handleNextClick}>Next</NextButton> // Show "Next" button if no scroll
            )}
        </div>
    );
};

export default UserList;
