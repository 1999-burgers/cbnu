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
        <li><a href="../mychild">내아이정보</a></li>
        <li><a href="../mealtable">식단표</a></li>
        <li><a href="../photo">사진첩</a></li>
        <li><a href="../myclass">우리반이야기</a></li>
        <li><a href="../notice">공지사항</a></li>
      </ul>
      <ul className={styles.navicons}>
        <i></i>
        마이페이지
      </ul>

    </nav >
  )
};

export default Header;