import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Table } from 'react-bootstrap';

import 'bootstrap/dist/css/bootstrap.min.css'; 

function FetchData() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/posts")
      .then(res => setData(res.data))
      .catch(err => console.log(err));
  }, []);

  return (
    <div className='container'>
      <div className='mt-3'>
        <h3>Fetch Data from API in React with Bootstrap</h3>

        <Table striped bordered hover >
          <thead>
            <tr>
              <th>Id</th>
              <th>Title</th>
              <th>Body</th>
            </tr>
          </thead>
          <tbody>
            {data.map((user, index) => (
              <tr key={index}>
                <td>{user.id}</td>
                <td>{user.title}</td>
                <td>{user.body}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </div>
  );
}

export default FetchData;
