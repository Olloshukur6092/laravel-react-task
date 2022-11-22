import axios from 'axios';
import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { url } from '../url/url';
import AdminHeader from './AdminHeader'

const Colors = () => {
    const [colors, setColors] = useState([]);

    useEffect(() => {
      async function getColor() {
        try {
          const color = await axios.get(`${url}/api/products/color`);
          setColors(color.data.colors);
        } catch(err) {
          console.log(err);
        }
      }
      getColor();
    }, []);
  return (
    <>
    <AdminHeader />
    <div className='container mt-3'>
        <div className="row">
            <div className="col-md-6">
                <div className="card">
                    <div className="card-header">
                        <h3 className='d-inline-block'>All Colors</h3>
                        <Link to="/admin/add-color" className='btn btn-primary float-end'>Add Color</Link>
                    </div>
                    <div className="card-body">
                    <table className="table table-striped">
                  <thead>
                    <tr>
                      <th>#</th>
                      <th>Product color</th>
                    </tr>
                  </thead>
                  <tbody>
                    {colors &&
                      colors.map((color, index) => {
                        return (<tr key={index}>
                            <td>{index + 1}</td>
                            <td>{color.color}</td>
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
  )
}

export default Colors