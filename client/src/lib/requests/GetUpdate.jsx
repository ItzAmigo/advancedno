import React, { useState, useEffect } from 'react';
import api from '../apis/apis';

function GetData() {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [name, setName] = useState('');
  const [newName, setNewName] = useState('');

  useEffect(() => {
    api.get('/posts')
      .then(response => setData(response.data))
      .catch(error => console.error(error));
  }, []);

  useEffect(() => {
    setFilteredData(data.filter(item => item.name === name));
  }, [data, name]);

  const handleSearch = () => {
    const filtered = data.filter(item => item.name === name);
    setFilteredData(filtered);
  };

  const handleUpdate = (name) => {
    api.put(`/posts/${name}`, { name: newName })
      .then(response => {
        setData(data.map(item => item.name === name ? response.data : item));
        setFilteredData(filteredData.map(item => item.name === name ? response.data : item));
        setNewName('');
      })
      .catch(error => console.error(error));
  };

  return (
    <div>
      <div>
        <input type="text" value={name} onChange={e => setName(e.target.value)} />
        <button onClick={handleSearch}>Search</button>
        <input type="text" value={newName} onChange={e => setNewName(e.target.value)} />
      </div>
      <div>
        {filteredData.map(item => (
          <div key={item.id}>
            <h2>{item.name}</h2>
            <p>{item.description}</p>
            <p>{item.category}</p>
            <p>{item.rating}</p>
            <p>{item.price}</p>
            <button onClick={() => handleUpdate(item.id)}>Update</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default GetData;