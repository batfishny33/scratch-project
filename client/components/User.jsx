import React from 'react';

function User() {
  const { fullName, username, imgURL, bio, techStack, likedUsers } = userDetails;
  return (
    <div>
      {fullName},{username},{imgURL},{bio},{techStack},{likedUsers}
    </div>
  )
}

export default User;
