import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { url } from "../url/url";
import AdminHeader from "./AdminHeader";

const Products = () => {
  const [products, setProducts] = useState([]);

  async function getProducts() {
    try {
      const { data } = await axios.get(`${url}/api/products/product`);
      setProducts(data.products);
      console.log(data);
    } catch (err) {
      console.log(err);
    }
  }
  useEffect(() => {
    getProducts();
  }, []);

  async function deleteProduct(productId) {
    try {
      let data = await axios.delete(`${url}/api/products/product/${productId}`);
      if (data.status === 200) {
        console.log(data);
        getProducts();
      }
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <>
      <AdminHeader />
      <div className="container mt-3">
        <div className="card shadow border-0">
          <div className="card-header border-0">
            <h3 className="d-inline-block">All Product</h3>
            <Link className="btn btn-primary float-end" to="/admin/add-product">
              Add Product
            </Link>
          </div>
          <div className="card-body">
            <table className="table table-striped">
              <thead>
                <tr>
                  <th>#</th>
                  <th>Product name</th>
                  <th>Product type</th>
                  <th>Product color</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {products &&
                  products.map((product, i) => {
                    return (
                      <tr key={i}>
                        <td>{i + 1}</td>
                        <td>{product.product_name}</td>
                        <td>{product.types.type}</td>
                        <td>{product.colors.color}</td>
                        <td>
                          <button
                            className="btn btn-danger"
                            onClick={() => deleteProduct(product.id)}
                          >
                            Delete
                          </button>
                        </td>
                      </tr>
                    );
                  })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default Products;
