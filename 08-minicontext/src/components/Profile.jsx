// E:/React.js-15/08-minicontext/src/components/Profile.jsx
import React, { useContext } from 'react';
import UserContext from '../context/UserContext'; // Correct path

function Profile() {
  const { user } = useContext(UserContext);

  if (!user) {
    return <div>Please log in to view your profile.</div>;
  }

  return (
    <div>
      <h2>Profile</h2>
      <p>Username: {user.username}</p>
    </div>
  );
}

export default Profile;