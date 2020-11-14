import * as React from 'react';

import { Envelope, Facebook, Instagram, Youtube } from '../components/Icon';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="footer_section col-md-4">
            <div className="footer_logo">
              <a href="/">Avatino</a>
            </div>
          </div>
          <div className="footer_section col-md-4">
            <div className="footer_information">
              <h2>Information</h2>
              <ul>
                <li>
                  <a href="/">Giới thiệu</a>
                </li>
                <li>
                  <a href="/">Liên hệ</a>
                </li>
                <li>
                  <a href="/">Bảo hành</a>
                </li>
                <li>
                  <a href="/">Thanh toán</a>
                </li>
                <li>
                  <a href="/">Đổi trả</a>
                </li>
                <li>
                  <a href="/">Bảo mật</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="footer_section col-md-4">
            <div className="footer_socials">
              <h2>Follow us</h2>
              <div className="icons">
                <div className="icon">
                  <a href="/">
                    <Facebook />
                  </a>
                </div>
                <div className="icon">
                  <a href="/">
                    <Instagram />
                  </a>
                </div>
                <div className="icon">
                  <a href="/">
                    <Youtube />
                  </a>
                </div>
              </div>
              <div className="newsletter">
                <form>
                  <input type="text" placeholder="Đăng ký nhận tin" />
                  <button type="submit">
                    <Envelope />
                  </button>
                </form>
              </div>
              <div className="contact">
                <div className="hotline">
                  <span>Hotline:</span> 09 090 90909
                </div>
                <div className="email">
                  <span>Email:</span> avatino@gmail.com
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
