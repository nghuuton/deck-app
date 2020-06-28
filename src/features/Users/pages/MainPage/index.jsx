import React from "react";
import { Link } from "react-router-dom";

const MainPage = () => {
  return (
    <div>
      <Link to="/users/add">Add new User</Link>
    </div>
  );
};

export default MainPage;
