// App.jsx
import React, { useEffect, useState } from 'react';
import GoodList from './GoodList';

const App = () => {
  const [stocks, setStocks] = useState([]);

  const fetchStocks = async () => {
    try {
      const res = await fetch('/api/evaluvation-service/stock/NVDA');
      const data = await res.json();
      setStocks([data]); // Assuming the API returns a single stock object
    } catch (err) {
      console.error("Error fetching stocks:", err);
    }
  };

  useEffect(() => {
    fetchStocks();
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Stock Market</h1>
      <GoodList stocks={stocks} />
    </div>
  );
};

export default App;
