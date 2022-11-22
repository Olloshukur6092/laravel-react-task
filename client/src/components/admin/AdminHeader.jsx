import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "../layouts/layouts.css";

const AdminHeader = () => {
  const navigate = useNavigate();

  let admin =
    localStorage.getItem("admin") !== null
      ? JSON.parse(localStorage.getItem("admin"))
      : null;

  const adminLogout = () => {
    localStorage.removeItem("admin");
    navigate("/admin/login");
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg bg-dark navbar-dark">
        <div className="container">
          <Link className="navbar-brand" to="/admin/dashboard">
            OX-Group
          </Link>
          <div>
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link" to="/admin/dashboard">
                  Dashboard
                </Link>
              </li>
              {admin !== null ? ( 
                <>
                  <li className="nav-item">
                    <Link className="nav-link" to="/admin/products">
                      Products
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/admin/sizes">
                      Sizes
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/admin/colors">
                      Colors
                    </Link>
                  </li>
                  <li className="nav-item">
                    <button className="btn btn-secondary px-3 py-2 mt-1 ms-2" onClick={adminLogout}>
                      Logout
                    </button>
                  </li>
                </>
              ) : (
                <>
                  <li className="nav-item">
                    <Link className="nav-link" to="/admin/login">
                      Login
                    </Link>
                  </li>
                </>
              )}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default AdminHeader;
