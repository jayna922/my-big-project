import React from 'react';
import { Link } from 'react-router-dom';

const NavbarDesktop = () => {
  return (
    <>
      <div className="head">
        <div className="logo">
          <img src={require('../../image/navbar/logo.png')} alt="" />
        </div>

        <div className="navBar">
          <ul>
            <li>
              <Link to="">首頁</Link>
            </li>
            <li>
              <Link to="">立即參團</Link>
            </li>
            <li>
              <Link to="">店家列表</Link>
            </li>
            <li>
              <Link to="">店家登入/註冊</Link>
            </li>
          </ul>
        </div>

        <div className="icon">
          <img src={require('../../image/navbar/shop.png')} alt="" />
          <img src={require('../../image/navbar/login.png')} alt="" />
          <img src={require('../../image/navbar/map.png')} alt="" />
        </div>
      </div>
    </>
  );
};

export default NavbarDesktop;
