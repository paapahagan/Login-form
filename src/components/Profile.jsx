import React from "react";

function Profile(props) {
  // Make a request for a user with a given ID

  return (
    <div>
      <h2>Profile</h2>
      name: {props.name}
      <br />
      email: {props.email}
      <br />
      <br />
      <button onClick={props.handleChurches}> Churches </button>
      <button onClick={props.handleLogout}>log Out</button>
    </div>
  );
}

export default Profile;
