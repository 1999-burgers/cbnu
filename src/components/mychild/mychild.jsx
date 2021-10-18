import React, { useEffect, useState } from 'react';
import Header from '../header/header';
import Footer from '../footer/footer';
import Map2 from '../map/map copy';
import styles from './mychild.module.css'
import { useLocation } from "react-router-dom";
import firebaseapp from '../../service/firebase'
import text from '../../raspberry/text.txt'
/*global kakao*/

const { kakao } = window;
const Mychild = ({ state }) => {
  const [childinfo, setChildinfo] = useState({
    childclass: "",
    name: "",
    kindergarten: {
      address_name: "",
      place_name: ""
    }
  })
  const [txt, setTxt] = useState("")

  useEffect(() => {
    firebaseapp.database().ref(`${window.sessionStorage.getItem("childId")}`).once("value")
      .then(snapshot => {
        const value = snapshot.val();
        console.log(value)
        setChildinfo(value)
      })
    fetch(text)
      .then(res => {
        return res.text()
      })
      .then(res => {
        setTxt(res)
      })
  }, [])




  const split_txt = txt.split("\n")
  console.log(split_txt.length - 2)
  console.log(split_txt[6], "출려갸")
  return (
    <section>
      <Header />
      <ul className={styles.content}>
        <ul className={styles.child}>
          <img className={styles.childphoto} src={require("../../images/child1.png").default} alt="사진" />
          <ul className={styles.childinfo}>
            <h1 className={styles.childclass}>{childinfo.kindergarten.place_name} {childinfo.childclass}</h1>
            <h1 className={styles.childclass}>{childinfo.name}</h1>
          </ul>
        </ul>
        <ul className={styles.childinfo}>
          <ul className={styles.child}>
            <Map2 place_x={childinfo.kindergarten.x} place_y={childinfo.kindergarten.y} />
          </ul>
          <h1 className={styles.childclass2}>아이가 오후 3시 30분에 승차하였습니다</h1>
          {/* <h1>{childinfo.kindergarten.x}</h1>
          <h1>{childinfo.kindergarten.y}</h1> */}
          {/* <li /> */}
          {/*원래 이거로해야됨*/}
          {/* <li className={styles.tag}>{split_txt[split_txt.length - 2]}</li> */}
          {/* <li className={styles.tag}>{split_txt[split_txt.length - 2]}</li> */}
        </ul>
      </ul>
      <Footer />
    </section >
  )
};
export default Mychild;