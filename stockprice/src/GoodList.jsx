import React, { useState, useEffect } from "react";
function GoodList() {
   const [goods, setGoods] = useState([]);
  useEffect(() => {
    const data = [
      { id: 1, name: "Apple", price: 1.2 },
      { id: 2, name: "Banana", price: 0.8 },
      { id: 3, name: "Orange", price: 1.5 },
    ];
    setGoods(data);
  }, []);

  return (
    <div style={{ textAlign: "center" }}>
      <h2>Goods Price List</h2>
      <table style={{ margin: "auto", borderCollapse: "collapse" }}>
        <thead>
          <tr>
            <th style={{ border: "1px solid black", padding: "8px" }}>Name</th>
            <th style={{ border: "1px solid black", padding: "8px" }}>Price ($)</th>
          </tr>
        </thead>
        <tbody>
          {goods.map((item) => (
            <tr key={item.id}>
              <td style={{ border: "1px solid black", padding: "8px" }}>{item.name}</td>
              <td style={{ border: "1px solid black", padding: "8px" }}>{item.price.toFixed(2)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );

}

export default GoodList