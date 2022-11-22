import axios from "axios";
import React, { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { url } from "../url/url";

const AdminLogin = () => {
  let data =
    localStorage.getItem("admin") !== null
      ? JSON.parse(localStorage.getItem("admin"))
      : null;

  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});
  const [errorMessage, setErrorMessage] = useState("");

  const adminLoginForm = async (e) => {
    e.preventDefault();
    const data = new FormData();
    data.append("email", email);
    data.append("password", password);

    try {
      const res = await axios.post(`${url}/api/admin/login`, data);
      if (res.status === 200) {
        localStorage.setItem("admin", JSON.stringify(res.data));
        navigate("/admin/dashboard");
      }
    } catch ({response}) {
      console.log(response.status);
      if (response.status === 422) {
        console.log(response.data);
        setErrors(response.data);
      }

      if (response.status === 401) {
        console.log(response.data.error);
        setErrorMessage(response.data.error);
      }
      if (response.status === 403) {
        setErrorMessage(response.data.error);
      }

    }
    // axios
    //   .post(`${url}/api/admin/login`, data)
    //   .then((res) => {
    //     console.log(res);
    //     if (res.status === 200) {
    //       localStorage.setItem("admin", JSON.stringify(res.data));
    //       navigate("/admin/dashboard");
    //     }
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });
  };

  if (data !== null) {
    return <Navigate to="/admin/dashboard" />;
  }
  return (
    <>
      <div className="container mt-3">
        <div className="row">
          <div className="col-md-6 offset-3">
            <div className="card shadow border-0">
              <div className="card-header text-center border-0">
                <h3>Login Admin</h3>
              </div>
              <div className="card-body">
                { Object.keys(errors).length > 0 && (
                  <div className="alert alert-danger">
                    <ul className="mb-0">
                      { Object.entries(errors).map(([key, value]) => (
                        <li key={key}>{value}</li>
                      )) }
                    </ul>
                  </div>
                ) }
                { errorMessage && (
                  <div className="alert alert-danger p-1 text-center">
                    <ul className="mb-0">
                      {errorMessage}
                    </ul>
                  </div>
                ) }
                <form onSubmit={(e) => adminLoginForm(e)}>
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

export default AdminLogin;
