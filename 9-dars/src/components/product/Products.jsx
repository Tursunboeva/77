import React from 'react';
import { useGetProductsQuery } from '../../redux/api/productsApi';

const Products = () => {
  const { data } = useGetProductsQuery();

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 p-4">
      {
        data && data.payload &&
        data.payload.map(product => (
          <div key={product._id} className="bg-white p-4 shadow-md rounded-md">
            <img src={product.product_images[0]} alt={product.product_name} className="w-full h-48 object-cover" />
            <p className="mt-2 text-lg font-semibold">{product.product_name}</p>
          </div>
        ))
      }
    </div>
  );
};

export default Products;
