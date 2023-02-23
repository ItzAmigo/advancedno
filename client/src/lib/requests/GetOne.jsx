import React, { useState, useEffect } from 'react';
import api from '../apis/apis';

function GetOne() {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [name, setName] = useState('');

  useEffect(() => {
    api.get('/posts')
      .then(response => setData(response.data))
      .catch(error => console.error(error));
  }, []);

  useEffect(() => {
    setFilteredData(data.filter(item => item.name === name));
  }, [data, name]);

  const handleSearch = () => {
    setFilteredData(data.filter(item => item.name === name));
  };

  return (
    <div>
      <div>
        <input type="text" value={name} onChange={e => setName(e.target.value)} />
        <button onClick={handleSearch}>Search</button>
      </div>
      <div>
        {filteredData.map(item => (
          <div key={item.id}>
            <h2>{item.name}</h2>
            <p>{item.description}</p>
            <p>{item.category}</p>
            <p>{item.rating}</p>
            <p>{item.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default GetOne;