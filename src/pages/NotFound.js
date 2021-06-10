import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="not-found">
      <h2>Error 404</h2>
      <p>Page doesn't exist :(</p>
      <Link to="/">Go back</Link>
    </div>
  );
};

export default NotFound;
