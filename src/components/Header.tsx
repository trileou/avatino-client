import React, { useState } from 'react';
import { Facebook, Instagram, Search } from './Icon';
import SearchModal from './SearchModal';

export interface HeaderProps {}

const Header: React.FC<HeaderProps> = () => {
  const [searchModalVisible, setSearchModalVisible] = useState(false);

  return (
    <header className="header">
      <div className="container">
        <div className="header_inner">
          <div className="header_info">
            <button>
              <Facebook />
            </button>
            <button>
              <Instagram />
            </button>
          </div>
          <div className="header_logo">
            <h1>
              <a href="/">Avatino</a>
            </h1>
          </div>
          <div className="header_search">
            <button onClick={() => setSearchModalVisible(true)}>
              <Search />
            </button>
          </div>

          {/* {searchModalVisible && (
          <SearchModal closeModal={() => setSearchModalVisible(false)} />
        )} */}
        </div>
      </div>
    </header>
  );
};

export default Header;
