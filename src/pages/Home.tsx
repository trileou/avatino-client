import * as React from 'react';
import Slider from 'react-slick';

import Product from '../components/Product';

import hero from '../assets/hero.jpg';

export interface HomeProps {}

const settingsSpecialSlider = {
  slidesToShow: 5,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    }
  ]
};

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
          <div className="content-section">
            <h2 className="products-title">SẢN PHẨM MỚI</h2>
            <div className="new-products">
              {[1, 1, 1, 1, 1, 1, 1, 1, 1, 1].map((_, index) => (
                <Product key={index} />
              ))}
            </div>
            </div>

          <div className="content-section">
            <div className="newsletter">
              <div className="content">
                <h2>Newsletter</h2>
                <p>Hãy đăng ký để nhận tin về sản phẩm mới nhất</p>
              </div>
              <form className="form">
                <input type="text" />
                <button type="submit">Đăng ký</button>
              </form>
            </div>
          </div>

          <div className="content-section">
            <h2 className="products-title">SẢN PHẨM HOT</h2>
            <div className="special-products">
              <Slider {...settingsSpecialSlider}>
                {[1, 1, 1, 1, 1, 1, 1, 1, 1, 1].map((_, index) => (
                  <Product key={index} />
                ))}
              </Slider>
            </div>
          </div>     
          </div>
        </div>
    </div>
  );
};

export default Home;
