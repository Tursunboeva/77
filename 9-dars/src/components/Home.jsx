import React from 'react';
import Products from '../../components/product/Products';

const Home = () => {
  return (
    <div>
      <header className="bg-blue-600 text-white p-4">
        <h1 className="text-2xl">My Store</h1>
      </header>
      <Products />
    </div>
  );
};

export default Home;
