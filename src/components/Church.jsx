import React from "react";

function Church(props) {
  return (
    <div>
      <h3>Church</h3>
      <input
        type="text"
        placeholder="Search"
        // value={search}
        onChange={props.handleSearch}
      />
      <button onClick={props.handleSearch}>Search</button>

      <table>
        <thead>
          <tr>
            <th onClick={() => props.handleSort("id")}>ID</th>
            <th onClick={() => props.handleSort("name")}>Church Name</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          {props.posts.map((post) => (
            <tr key={post.id}>
              <th>{post.id}</th>
              <th>{post.name}</th>
              <th>{post.created_at}</th>
            </tr>
          ))}
        </tbody>
      </table>
      <button onClick={props.handleProfile}>Profile</button>
    </div>
  );
}

export default Church;
