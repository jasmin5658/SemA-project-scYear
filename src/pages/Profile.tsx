import React, { useContext } from 'react';
import { UserContext } from '../context/UserContext';

export default function Profile() {
  const { currentUser } = useContext(UserContext);

  return (
    <div>
      <h1>Profile Page</h1>
      {currentUser && (
        <div>
          <p>Name: {currentUser.Fname}</p>
          <p>Email: {currentUser.email}</p>
          <p>Phone: {currentUser.phone}</p>
          <p>Image: {currentUser.image}</p>
        </div>
      )}
    </div>
  );
}
