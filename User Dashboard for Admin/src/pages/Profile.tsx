import React from 'react';
import { useParams } from 'react-router-dom';

const Profile: React.FC = () => {
  const { userId } = useParams<{ userId: string }>();

  return (
    <div>
      <h2>Profile for User ID: {userId}</h2>
      <p>User details for user with ID: {userId}</p>
    </div>
  );
};

export default Profile;
