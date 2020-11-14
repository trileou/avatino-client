import * as React from 'react';

import Product from '../components/Product';

import hero from '../assets/hero.jpg';
import Loader from '../components/Loader';

export interface HomeProps {}

const Home: React.FC<HomeProps> = () => {
  return (
    <div className="home">
      <div
        style={{
          minHeight: '100vh',
          background: `url(${hero}) center center / cover`
        }}
      ></div>

      <div className="container">
        <div className="home_content">
          <h2 className="list-product-title">SẢN PHẨM MỚI</h2>
          <div className="list-product">
            {[1, 1, 1, 1, 1, 1, 1, 1, 1, 1].map((_, index) => (
              <Product key={index} />
            ))}
          </div>

          <div className="view-more">
            <span>
              <Loader loading={true} />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
