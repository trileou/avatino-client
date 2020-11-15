import * as React from 'react';

import product from '../assets/product.jpg';
import { Facebook } from '../components/Icon';
import Product from '../components/Product';

export interface ProductDetailsProps {}

const ProductDetails: React.FC<ProductDetailsProps> = () => {
  return (
    <div className="details">
      <div className="details_hero">
        <div className="hero">
          <div className="hero_inner">
            <div className="hero_carousel">
              <img src={product} alt="" className="img-fluid" />
            </div>
            <div className="hero_info">
              <div className="product-info">
                <h1 className="product-info_title">Sản phẩm 1</h1>
                <span className="product-info_price">100.000 d</span>
                <p className="product-info_short-desc">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo
                  quia ad saepe amet accusantium quas provident eius tempora
                  dolor quod rerum, error sit harum obcaecati accusamus aliquam!
                  Cupiditate, doloremque provident.
                </p>
              </div>
              <div className="product-meta">
                <div className="meta-row sku">
                  SKU: <span>12345-AB</span>
                </div>
                <div className="meta-row">
                  Categories: <span>Products, Colors</span>
                </div>
                <div className="meta-row">
                  Tags: <span>green, white</span>
                </div>
                <div className="meta-row single-share">
                  Share:
                  <ul>
                    <li>
                      <a href="/">
                        <Facebook />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="details_related-products">
        <div className="container">
          <h2>Sản phẩm liên quan</h2>
          <div className="list-product">
            {[1, 1, 1, 1, 1].map((_, index) => (
              <Product key={index} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
