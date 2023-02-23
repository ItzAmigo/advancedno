import React, { useState, useEffect } from "react";
import api from "../apis/apis";

const ShowAll = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    // Make a GET request to http://localhost:5000/api/mydata
    api
      .get("/posts")
      .then((response) => setData(response.data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <div class="cards-all">
      {data.map((item) => (
        <div key={item.id}>
          <h2 class="cards-all-name">{item.name}</h2>
          <p class="cards-all-description">{item.description}</p>
          <p class="cards-all-category">{item.category}</p>
          <p class="cards-all-rating">{item.rating}</p>
          <p class="cards-all-price">{item.price}</p>
        </div>
      ))}
    </div>
  );
};

export default ShowAll;
