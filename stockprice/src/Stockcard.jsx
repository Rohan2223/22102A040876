// GoodList.jsx
import React from 'react';
import Stockcard from './Stockcard';

const GoodList = ({ stocks }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {stocks?.length > 0 ? (
        stocks.map(stock => (
          <Stockcard key={stock.symbol} stock={stock} />
        ))
      ) : (
        <p className="col-span-full text-center text-gray-500">No stocks to display.</p>
      )}
    </div>
  );
};

export default GoodList;

