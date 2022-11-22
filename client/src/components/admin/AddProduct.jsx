import axios from "axios";
import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { url } from "../url/url";
import AdminHeader from "./AdminHeader";

const AddProduct = () => {

    const navigate = useNavigate();

  const [productName, setProductName] = useState("");
  let [productSize, setProductSize] = useState(0);
  let [productColor, setProductColor] = useState(0);

  const [types, setTypes] = useState([]);
  const [colors, setColors] = useState([]);

  const addProduct = (e) => {
    e.preventDefault();
    const data = new FormData();
    data.append("productName", productName);
    data.append("productType", productSize);
    data.append("productColor", productColor);

    axios.post(`${url}/api/products/product`, data).then((res) => {
        console.log(res);
        if (res.status === 200) {
           navigate("/admin/products"); 
        }
    }).catch((err) => {
        console.log(err);
    })
  };

  useEffect(() => {
    async function getSize() {
     try {
        const size = await axios.get(`${url}/api/products/type`);

        if (size.status === 200) {
          setTypes(size.data.types);
        }
     } catch(err) {
        console.log(err);
     }
    }
    getSize();
  }, []);

  useEffect(() => {
    async function getColor() {
      try {
        const color = await axios.get(`${url}/api/products/color`);
        if (color.status === 200) {
          setColors(color.data.colors);
        }
      }catch(err) {
        console.log(err);
      }
    }
    getColor();
  }, []);

  return (
    <>
      <AdminHeader />
      <div className="container mt-3">
        <div className="row">
          <div className="col-md-6">
            <div className="card shadow border-0">
              <div className="card-header border-0">
                <h3 className="d-inline-block">Add Product</h3>
                <Link
                  className="btn btn-primary float-end"
                  to="/admin/products"
                >
                  Back
                </Link>
              </div>
              <div className="card-body">
                <form onSubmit={(e) => addProduct(e)}>
                  <div className="mb-3">
                    <select
                      name=""
                      id=""
                      className="form-select"
                      value={productSize}
                      onChange={(e) => setProductSize(e.target.value)}
                    >
                      <option value="0" selected disabled>
                        Select
                      </option>
                      {types &&
                        types.map((type, i) => {
                          return (
                            <option value={type.id} key={i}>
                              {type.type}
                            </option>
                          );
                        })}
                    </select>
                  </div>{" "}
                  <div className="mb-3">
                    <select
                      name=""
                      id=""
                      className="form-select"
                      value={productColor}
                      onChange={(e) => setProductColor(e.target.value)}
                    >
                      <option value="0" selected disabled>
                        Select
                      </option>
                      {colors &&
                        colors.map((color, i) => {
                          return (
                            <option value={color.id} key={i}>
                              {color.color}
                            </option>
                          );
                        })}
                    </select>
                  </div>
                  <div className="mb-3">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter product name"
                      value={productName}
                      onChange={(e) => setProductName(e.target.value)}
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

export default AddProduct;
