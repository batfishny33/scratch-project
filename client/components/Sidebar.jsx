import React, { useContext } from 'react';
import Match from './Match';
import { currentUserContext } from '../src/Context';

// since we're using currentUser here it may not requires a contextHook
// but I'm using it anyway :D

function Sidebar() {
  const currentUser = useContext(currentUserContext);
  const matchesArr = [];
  currentUser.matches.forEach(x=>matchesArr.push(<Match username={x} key={x} />));
  return (
    <div>{matchesArr}</div>
  )
}

export default Sidebar;