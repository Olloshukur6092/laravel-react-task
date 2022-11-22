import axios from "axios";
import React, { useState } from "react";
import { useNavigate, Navigate } from "react-router-dom";
import Header from "../layouts/Header";
import { token } from "../url/token";

const Login = () => {
  let data = token();

  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});
  const [errorMessage, setErrorMessage] = useState("");

  const loginForm = async (e) => {
    e.preventDefault();
    const data = new FormData();
    data.append("email", email);
    data.append("password", password);

    try {
      const res = await axios.post(
        "http://localhost:8000/api/auth/login",
        data
      );
      if (res.status === 200) {
        localStorage.setItem("user", JSON.stringify(res.data));
        navigate("/profile");
      }
    } catch ({ response }) {
      if (response.status === 422) {
        setErrors(response.data);
      }
      if (response.status === 401) {
        setErrorMessage(response.data.error);
      }
    }
  };
  if (data !== null) {
    return <Navigate to="/profile" />;
  }
  return (
    <>
      <Header />
      <div className="container mt-3">
        <div className="row">
          <div className="col-md-6 offset-3">
            <div className="card shadow border-0">
              <div className="card-header text-center border-0">
                <h3>Login User</h3>
              </div>
              <div className="card-body">
                {Object.keys(errors).length > 0 && (
                  <div className="alert alert-danger">
                    <ul className="mb-0">
                      {Object.entries(errors).map(([key, value]) => (
                        <li key={key}>{value}</li>
                      ))}
                    </ul>
                  </div>
                )}
                {errorMessage && (
                  <div className="alert alert-danger">
                    <ul className="mb-0 text-center p-1">{errorMessage}</ul>
                  </div>
                )}
                <form onSubmit={(e) => loginForm(e)}>
                  <div className="mb-3">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter your email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                  <div className="mb-3">
                    <input
                      type="password"
                      className="form-control"
                      placeholder="Enter your password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </div>
                  <div className="mb-3">
                    <input
                      type="submit"
                      className="btn btn-primary"
                      value="Send"
                    />
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
