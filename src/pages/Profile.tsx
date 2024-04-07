import { useNavigate } from 'react-router-dom';

const Profile = () => {
  // Retrieve user data from local storage (encrypted for sensitive data)
  const userDataString = localStorage.getItem('currentUser');
  let userData;

  if (userDataString) {
    try {
      // Decrypt user data if encryption is implemented (refer to security note)
      userData = JSON.parse(atob(userDataString)); // Assuming base64 encoding
    } catch (error) {
      console.error('Error parsing user data from local storage:', error);
      userData = null; // Handle decryption errors gracefully
    }
  } else {
    userData = null;
  }

  return (
    <div>
      <h1>Profile</h1>
      {userData ? ( // Conditionally render profile information if user is logged in
        <div>
          <h2>User Information</h2>
          <p><strong>Image:</strong> {userData.image}</p>
          <p><strong>Email:</strong> {userData.email}</p>
          <p><strong>First Name:</strong> {userData.Fname}</p>
          <p><strong>Last Name:</strong> {userData.Lname}</p>
          <p><strong>Phone:</strong> {userData.phone}</p>
          <p><strong>Birth Date:</strong> {userData.birthDate}</p>
          <p>
            <strong>Address:</strong> {userData.address.city}, {userData.address.street}, {userData.address.homeNumber}
          </p>
          <p><strong>User History Purchases:</strong>{userData.UserHistoryPurchases}</p>
        </div>
      ) : (
        <p>You are not currently logged in.</p>
      )}
    </div>
  );
};

export default Profile;
