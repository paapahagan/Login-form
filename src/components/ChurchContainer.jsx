import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import Church from "./Church";
import { useNavigate } from "react-router-dom";

function ChurchContainer() {
  const [posts, setPosts] = useState([]);
  const [sortDirection, setSortDirection] = useState("asc");

  const [initialFetch, setInitialFetch] = useState([]);

  // handle sort should handle sorting every row on the table
  // handle sort should check for the row type and sort by it
  // handle sort should handle ascending and descending order
  const navigate = useNavigate();

  const handleProfile = () => {
    navigate("/Profile");
  };

  const sortFunction = (row) => {
    if (!row) {
      return posts;
    }
    setSortDirection((sort) => (sort === "asc" ? "desc" : "asc"));

    if (sortDirection === "asc") {
      const data = posts.sort((a, b) =>
        b[row].trim().toLowerCase() - a[row].trim().toLowerCase() ? 1 : -1
      );
      setPosts(data);
    } else {
      const data = posts.reverse();
      setPosts(data);
    }
  };

  useEffect(() => {
    const token = localStorage.getItem("token");
    axios
      .get(
        "https://jckwv5tur8.execute-api.eu-west-1.amazonaws.com/church?page=1&offset=1",
        {
          headers: {
            authorization: `Bearer ${token}`,
          },
        }
      )

      .then(function (response) {
        // handle success
        setPosts(response.data.data);
        setInitialFetch(response.data.data);

        console.log(response);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });

    console.log("i run");
  }, []);

  // sear
  const handleSearch = (event) => {
    const searchTerm = event.target.value;
    if (searchTerm) {
      const result = initialFetch.filter(
        (post) =>
          post.name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
          post.id.toString().includes(searchTerm)
      );
      setPosts(result);
    } else {
      setPosts(initialFetch);
    }
  };

  return (
    <Church
      posts={posts}
      setPosts={setPosts}
      handleSearch={handleSearch}
      handleSort={sortFunction}
      handleProfile={handleProfile}
    />
  );
}

export default ChurchContainer;
