import React from "react";
import { Navigate } from "react-router-dom";
import AdminHeader from "./AdminHeader";

const Dashboard = () => {
  let data =
    localStorage.getItem("admin") !== null
      ? JSON.parse(localStorage.getItem("admin"))
      : null;

  if (data === null) {
    return <Navigate to="/admin/login" />;
  }

  return (
    <>
      <AdminHeader />
      <div className="container">
        <h1>Dashboard </h1>
        <h2>Welcome {data.user.name}</h2>
      </div>
    </>
  );
};

export default Dashboard;
