import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { url } from "../url/url";
import AdminHeader from "./AdminHeader";

const AddColor = () => {
  const navigate = useNavigate();
  const [color, setColor] = useState("");

  const addColor = (e) => {
    e.preventDefault();
    axios
      .post(`${url}/api/products/color`, { color: color })
      .then((res) => {
        console.log(res);
        if (res.status === 200) {
            navigate("/admin/colors")
            setColor("");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <AdminHeader />
      <div className="container mt-3">
        <div className="row">
          <div className="col-md-6">
            <div className="card shadow border-0">
              <div className="card-header border-0">
                <h3 className="d-inline-block">Add Color</h3>
                <Link className="btn btn-primary float-end" to="/admin/colors">
                  Back
                </Link>
              </div>
              <div className="card-body">
                <form onSubmit={(e) => addColor(e)}>
                  <div className="mb-3">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter product color"
                      value={color}
                      onChange={(e) => setColor(e.target.value)}
                    />
                  </div>
                  <div className="mb-3">
                    <input
                      type="submit"
                      className="btn btn-primary float-end"
                      value="Save"
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

export default AddColor;
