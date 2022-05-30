import React from 'react';

function User(props) {
  const { fullName, username, imgURL, bio, techStack, likedUsers } = props.userDetails;
  return (
    <div>
      All users:
      {fullName},{username},{imgURL},{bio},{techStack},{likedUsers}
    </div>
  )
}

export default User;
