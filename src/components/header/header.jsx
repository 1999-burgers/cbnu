import React, { Component } from 'react';
import styles from './header.module.css'

const Header = (props) => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.navlogo}>
        <i className="fas fa-shapes"></i>
        <a className={styles.navlogotext} href="">내아이지킴이</a>
      </div>
      <ul className={styles.navmenu}>
        <li><a href="">1</a></li>
        <li><a href="">2</a></li>
        <li><a href="">3</a></li>
        <li><a href="">4</a></li>
        <li><a href="">5</a></li>
      </ul>
      <ul className={styles.navicons}>
        <i></i>
        마이페이지
      </ul>

    </nav >
  )
};

export default Header;