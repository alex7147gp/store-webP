import { useState, useEffect } from 'react';
import axios from 'axios';

const API = 'https://api-webp-production-4c74.up.railway.app/api/v1';

const useProducts = () => {
  const [products, setProducts] = useState([]);

  useEffect(async () => {
    const response = await axios(API);
    setProducts(response.data);
  }, []);

  return {
    products,
  };
};

export default useProducts;
