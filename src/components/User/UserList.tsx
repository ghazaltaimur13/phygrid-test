// UserList.tsx  
import React, { useState, useEffect } from 'react';  
import Loader from '../Loader/Loader';
// import UserItem from './UserItem';  
  
interface User {  
  id: string;  
  name: string;  
  profileImage: string;  
}  
  
const UserList: React.FC = () => {  
  const [users, setUsers] = useState<User[]>([]);  
  const [error, setError] = useState<string | null>(null);  
  const [loading, setLoading] = useState(true);

  useEffect(() => {  
        const fetchUsers = async () => {  
        try {  
            const response = await fetch('https://reqres.in/api/users');  
            const usersList = await response.json();  
            setUsers(usersList.data);  
            setLoading(false); 
        } catch (error: any) {  
            setError(error.message);  
        }  
    };  
    fetchUsers();  
  }, []);  
  
  if (error) {  
    return <div>Error: {error}</div>;  
  }  
  
  return (  
    <div>
      {loading ? (
        <Loader /> // Show the loading spinner while loading is true
      ) : (
        <ul>  
        {users.map((user) => (  
            <li key={user.id}>  
                {/* <UserItem user={user} />   */}
            </li>  
        ))}  
        </ul>  
      )}
    </div>
  );  
};  
  
export default UserList;
