import React from "react";
import { Navigate } from "react-router-dom";
import Header from "../layouts/Header";
import { token } from "../url/token";

const Profile = () => {
  let data = token();

  if (data === null) {
    return <Navigate to="/login" />;
  }

  return (
    <>
      <Header />
      <div className="container">
        {/* <h1>Welcome {data.user.name} </h1> */}
      </div>
    </>
  );
};

export default Profile;
