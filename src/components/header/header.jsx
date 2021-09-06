import React, { Component } from 'react';
import { useState } from 'react';
import styles from './header.module.css'

const Header = (props) => {
  const [isOpen, setMenu] = useState(false);
  const toggleMenu = () => {
    console.log("눌러졌음 ㅡㅡ")
    setMenu(isOpen => !isOpen);
  }
  return (
    <nav className={styles.navbar}>
      <div className={styles.navlogo}>
        <i className="fas fa-shapes"></i>
        <a className={styles.navlogotext} href="mychild">내아이지킴이</a>
      </div>
      <ul className={styles.navmenu}>
        <li><a href="../mychild">내아이정보</a></li>
        <li><a href="../mealtable">식단표</a></li>
        <li><a href="../photo">사진첩</a></li>
        <li><a href="../myclass">우리반이야기</a></li>
        <li><a href="../notice">공지사항</a></li>
      </ul>
      <a href="#" role="button" className={styles.navicons} onClick={toggleMenu}>
        마이페이지
      </a>
      <a className={isOpen ? styles.showmenu : styles.hidemenu}>
        <li >1</li>
        <li >2</li>
        <li >3</li>
        <li >4</li>
      </a>

    </nav >
  )
};

export default Header;