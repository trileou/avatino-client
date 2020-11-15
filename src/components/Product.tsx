import * as React from 'react';

import product from '../assets/product.jpg';

export interface ProductProps {}

const Product: React.FC<ProductProps> = () => {
  return (
    <div className="product">
      <div className="product_inner">
        <div className="product_media">
          <a href="./">
            <img className="img-fluid" src={product} alt="" />
          </a>
        </div>
        <div className="product_meta">
          <a href="/">
            <h5 className="product_name">Sản phẩm 1</h5>
          </a>
          <span className="product_price">100.000đ</span>
        </div>
      </div>
    </div>
  );
};

export default Product;
