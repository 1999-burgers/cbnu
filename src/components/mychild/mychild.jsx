import React, { useEffect, useState } from 'react';
import Header from '../header/header';
import Footer from '../footer/footer';
import styles from './mychild.module.css'
import { useLocation } from "react-router-dom";
import firebaseapp from '../../service/firebase'
import text from '../../raspberry/text.txt'

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
  // setChildinfo(location)

  // 같으면 위에거 다르면 아래거

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

  // const childinfo = location.state;
  // childinfoarr.push({
  //   userid: location.state.id,
  //   kindergarten: location.state.kindergarten.plcae_name
  // })
  // console.log(childinfo)
  // console.log(childinfoarr)
  // const currentchild = childinfoarr[0];


  return (
    <section>
      <Header />
      <ul className={styles.content}>
        <ul className={styles.child}>
          <img className={styles.childphoto} src={require("../../images/child1.png").default} alt="사진" />
          <ul className={styles.childinfo}>
            <li className={styles.childclass}>{childinfo.kindergarten.place_name} {childinfo.childclass}</li>
            <li className={styles.childclass}>{childinfo.name}</li>
          </ul>
        </ul>
        <ul className={styles.childinfo}>
          <li className={styles.tag}>{txt}</li>
        </ul>
      </ul>
      <Footer />
    </section >
  )
};
export default Mychild;