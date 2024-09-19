import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const SingleProduct = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    axios.get(`/product/single-product/${id}`)
      .then(response => setProduct(response.data.payload))
      .catch(error => console.error('Error fetching product data:', error));
  }, [id]);

  if (!product) return <p>Loading...</p>;

  return (
    <div className="p-4">
      <img src={product.product_images[0]} alt={product.product_name} className="w-full h-64 object-cover" />
      <h1 className="text-3xl mt-4">{product.product_name}</h1>
      <p className="text-xl text-gray-600 mt-2">${product.price}</p>
      <p className="mt-4">{product.description}</p>
    </div>
  );
};

export default SingleProduct;
