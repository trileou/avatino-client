import React, { useState } from 'react';
import { Search } from './Icon';
import SearchModal from './SearchModal';

export interface HeaderProps {}

const Header: React.FC<HeaderProps> = () => {
  const [searchModalVisible, setSearchModalVisible] = useState(false);

  return (
    <header className="header">
      <div className="container">
        <div className="header_inner">
          <div className="header_logo">
            <h1>
              <a href="/">Avatino</a>
            </h1>
          </div>
          <div className="header_menu">
            <ul className="menu">
              <li className="menu_item">
                <span>Sản phẩm</span>
              </li>
              <li className="menu_item">
                <span>Màu sắc</span>
              </li>
              <li className="menu_item">
                <span>Liên hệ</span>
              </li>
            </ul>

            <div className="hamburger">
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
          <div className="header_search">
            <button onClick={() => setSearchModalVisible(true)}>
              <Search />
            </button>
          </div>
        </div>

        {searchModalVisible && (
          <SearchModal closeModal={() => setSearchModalVisible(false)} />
        )}
      </div>
    </header>
  );
};

export default Header;
