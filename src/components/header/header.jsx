import React, { Component } from 'react';
import { useState } from 'react';
import styles from './header.module.css'
import { useLocation, useHistory } from 'react-router-dom'
import firebaseapp, { auth } from '../../service/firebase'

const Header = (props) => {
  const [isOpen, setMenu] = useState(false);
  const location = useLocation()
  const history = useHistory()
  const toggleMenu = () => {
    history.push("/mychild")
    console.log("눌러졌음 ㅡㅡ")
    setMenu(isOpen => !isOpen);
  }

  const logout = () => {
    firebaseapp.auth().signOut().then(() => {
      history.replace("/login")
    })
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
      { 
        location.pathname == "/mychild" ?
        (
          <a href="javascript:void(0)" role="button" className={styles.navicons} onClick={logout}>
            로그아웃
          </a>
        ) : (
          <a href="javascript:void(0)" role="button" className={styles.navicons} onClick={toggleMenu}>
            마이페이지
          </a>
        )
      }
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