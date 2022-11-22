import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { token } from "../url/token"; 
import "./layouts.css";

const Header = () => {
  const navigate = useNavigate();
 let data = token();
  
  const logOut = () => {
    localStorage.removeItem("user");
    navigate("/login");
  }

  return (
    <>
      <nav className="navbar navbar-expand-lg bg-dark navbar-dark">
        <div className="container">
          <Link className="navbar-brand" to="/">
            OX-Group
          </Link>
          <div>
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link" to="/">
                  Home
                </Link>
              </li>
              {data !== null ? (
                <>
               <li className="nav-item">
                <Link className="nav-link" to="/profile">
                  Profile
                </Link>
              </li>
              <li className="nav-item">
                <button className="btn btn-secondary px-3 py-2 mt-1 ms-2" onClick={logOut}>
                  Logout
                </button>
              </li>
                </>
              ) : (
                <>
                  <li className="nav-item">
                    <Link className="nav-link" to="/register">
                      Register
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/login">
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

export default Header;
