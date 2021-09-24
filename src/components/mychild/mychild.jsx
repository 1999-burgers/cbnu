import React, { useState } from 'react';
import Header from '../header/header';
import Footer from '../footer/footer';
import styles from './mychild.module.css'
import { useLocation } from "react-router-dom";

const Mychild = ({ state }) => {
  // const [childinfo, setChildinfo] = useState()
  const childinfoarr = [];
  const location = useLocation();
  const childinfo = location.state;
  childinfoarr.push({
    userid: location.state.id,
    kindergarten: location.state.kindergarten.plcae_name
  })
  console.log(childinfo)
  console.log(childinfoarr)
  const currentchild = childinfoarr[0];


  return (
    <section>
      <Header />
      <ul className={styles.content}>
        <ul className={styles.child}>
          <img className={styles.childphoto} src={require("../../images/child1.png").default} alt="사진" />
          <div className={styles.childclass}>걍아무말</div>
        </ul>
        <ul className={styles.childinfo}>
          <li className={styles.tag}>승하차 태그</li>
          <li className={styles.tag}>밥먹음 ? </li>
        </ul>
        <button > 어쩌구</button>
      </ul>
      <Footer />
    </section >
  )
};
export default Mychild;