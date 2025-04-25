import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import UserCard from '../components/UserCard';
import { TableContainer, UserCardContainer ,Button} from '../styles/styledComponents'; 

interface User {
  id: number;
  name: string;
  email: string;
}

const Home: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]); 
  const [loading, setLoading] = useState<boolean>(true);  
  const [error, setError] = useState<string>('');  

  useEffect(() => {
    axios
      .get('https://jsonplaceholder.typicode.com/users')
      .then((response) => {
        setUsers(response.data);  
        setLoading(false);  
      })
      .catch((err) => {
        setError('Error fetching data');
        setLoading(false);  
      });
  }, []);  

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div>
      <h2 style={{textAlign: "center"}}>User List</h2>
      <TableContainer>
        {users.map((user) => (
          <UserCardContainer key={user.id}>
            <UserCard user={user} />
            <Link to={`/profile/${user.id}`}>
              <Button>View Profile</Button>
            </Link>
          </UserCardContainer>
        ))}
      </TableContainer>
    </div>
  );
};

export default Home;
