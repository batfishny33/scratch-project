import React, {useState} from 'react';
import '../styles/user.css';

function User(props) {
  // props
  const { userID, fullname, username, age, imgURL, bio, stack } = props;
  const [liked, toggleLike] = useState(false);
  const [disliked, toggleDislike] = useState(false);
  // CHANGE LIKE BUTTON
  const toggleButton = () => {
    liked ? toggleLike(false) : toggleLike(true);
  }
  const toggleDislikeButton = (e) => {
    // LOL idk how else to do this...console.log(e.target.parentNode.parentNode.parentNode.parentNode);
    setTimeout(() => {
      (e.target.parentNode.parentNode.parentNode.parentNode).style.display = 'none';
    }, 500);
    toggleDislike(true);
  }
  return (
    <div id="card" className={disliked ? 'disliked' : 'notDisliked'}>
      <div className="left-card">
        <img className="avi" src={imgURL} alt="profile pic" />
        <h3>@{username}</h3>
      </div>
      <div className="right-card">
        <h1>{fullname}</h1>
        <p>Age: {age}</p>
        <p className="bio">{bio}</p>
        <p>Tech Stack: {stack}</p>
        <div className="buttons">
          <button onClick={toggleDislikeButton} className="dislike-btn"><i className="dislike-icon fa-solid fa-face-tired"></i></button>
          <button onClick={toggleButton} className="like-btn"><i id={liked ? 'liked' : 'notLiked'} className="like-icon fa-solid fa-face-grin-hearts"></i></button>
        </div>
      </div>
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
