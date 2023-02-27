import React, { useContext } from 'react';
import AppContext from '../context/appContext';
import '../styles/components/Products.styl';

import Product from './Product';

const Products = (props) => {

  const { products } = useContext(AppContext);

  const handleAddToCart = product => () => {

  };

  return (
    <div className="Products">
      <div className="Products-items">
        {products.map(product => (
          <Product
            key={product.id}
            product={product}
            handleAddToCart={handleAddToCart}
          />
        ))}
      </div>
    </div>
  );
};

export default Products;
