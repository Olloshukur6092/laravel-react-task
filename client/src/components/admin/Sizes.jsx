import axios from "axios";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { url } from "../url/url";
import AdminHeader from "./AdminHeader";

const Sizes = () => {
  const [sizes, setSizes] = useState([]);

  useEffect(() => {
    async function getSize() {
      try {
        const types = await axios.get(`${url}/api/products/type`);
        // console.log(types);
        setSizes(types.data.types);
      } catch(err) {
        console.log(err);
      }
    }
    getSize();
  }, []);

  return (
    <>
      <AdminHeader />
      <div className="container mt-3">
        <div className="row">
          <div className="col-md-6">
            <div className="card">
              <div className="card-header">
                <h3 className="d-inline-block">All Size</h3>
                <Link
                  to="/admin/add-size"
                  className="btn btn-primary float-end"
                >
                  Add Size
                </Link>
              </div>
              <div className="card-body">
                <table className="table table-striped">
                  <thead>
                    <tr>
                      <th>#</th>
                      <th>Product size</th>
                    </tr>
                  </thead>
                  <tbody>
                    {sizes &&
                      sizes.map((size, index) => {
                        return (<tr key={index}>
                            <td>{index + 1}</td>
                            <td>{size.type}</td>
                        </tr>)
                      })}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sizes;
