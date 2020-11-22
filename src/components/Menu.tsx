import * as React from 'react';


export interface MenuProps {}

const Menu: React.FC<MenuProps> = () => {
  return (
    <div className="menu">
      <div className="menu_inner">
        <div className="container">
          <div className="group_menu">
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
        </div>
      </div>
    </div>
  );
};

export default Menu;
