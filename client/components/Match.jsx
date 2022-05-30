import React, { useContext } from 'react';
import { currentUserContext } from '../src/Context';


function Match(props) {
  const currentUser = useContext(currentUserContext)
  console.log('in matches',props)
  const { username } = props;
  return (
    <div>matches: {username}</div>
  )
}

export default Match;