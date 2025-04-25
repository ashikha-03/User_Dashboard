import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { UserProfileContainer, ProfileTitle, ProfileDetail } from '../styles/styledComponents';

interface User {
  id: number;
  name: string;
  email: string;
  phone: string;
  address: {
    street: string;
    city: string;
  };
}

const UserProfile: React.FC = () => {
  const { userId } = useParams<{ userId: string }>();  
  const [user, setUser] = useState<User | null>(null);  

  useEffect(() => {
    axios.get(`https://jsonplaceholder.typicode.com/users/${userId}`)
      .then((response) => setUser(response.data))
      .catch((error) => console.error("Error fetching user data:", error));
  }, [userId]);

  if (!user) return <p>Loading...</p>;

  return (
    <UserProfileContainer>
      <ProfileTitle>{user.name}'s Profile</ProfileTitle>
      <ProfileDetail><strong>ID:</strong> {user.id}</ProfileDetail>
      <ProfileDetail><strong>Email:</strong> {user.email}</ProfileDetail>
      <ProfileDetail><strong>Phone:</strong> {user.phone}</ProfileDetail>
      <ProfileDetail><strong>Address:</strong> {user.address.street}, {user.address.city}</ProfileDetail>
    </UserProfileContainer>
  );
};

export default UserProfile;
