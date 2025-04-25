import React from 'react';

interface User {
  id: number;
  name: string;
  email: string;
}

interface UserCardProps {
  user: User;  
}

const UserCard: React.FC<UserCardProps> = ({ user }) => {
  return (
    <div>
      <h3>{user.name}</h3>
      <p>{user.email}</p>
    </div>
  );
};

export default UserCard;
