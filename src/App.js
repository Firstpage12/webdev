import './App.css';

import React, { useState } from 'react';


const App = () => {
  const [users, setUsers] = useState([]);


  const getData = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts');
    const data = await res.json();
    setUsers(data);
  };

  return (
    <div>
      <h1>Data</h1>
      <button onClick={getData}>Button</button>
      <div>
      <table>
        <thead>
          <tr>
            <th>Userid</th>
            <th>id</th>
            <th>title</th>
            <th>body</th>
          </tr>   
        </thead>   
        <tbody>
          {
          users.map( (pdata,key) =>
          <tr key={key}>
              <td className='table-data'>{pdata.userId }</td>
              <td className='table-data'>{pdata.id }</td>
              <td className='table-data'>{pdata.title }</td>
              <td className='table-data'>{pdata.body }</td>
              
          </tr>
          )
        }
        </tbody>
      </table>
       
      </div>
    </div>
  );
};

export default App;
