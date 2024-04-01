import React from 'react';

const Profile = () => {
    // Retrieve user data from local storage
    const userData = JSON.parse(localStorage.getItem('currentUser') || '{}');

    return (
        <div>
            <h1>Profile</h1>
            <div>
                <h2>User Information</h2>
                <p><strong>Image:</strong> {userData.image}</p>
                <p><strong>Email:</strong> {userData.email}</p>
                <p><strong>First Name:</strong> {userData.Fname}</p>
                <p><strong>Last Name:</strong> {userData.Lname}</p>
                <p><strong>Phone:</strong> {userData.phone}</p>
                <p><strong>Birth Date:</strong> {userData.birthDate}</p>
                
                
            </div>
        </div>
    );
}

export default Profile;
