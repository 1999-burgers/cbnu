import React, { useEffect, useState } from 'react';
import Header from '../header/header';
import Footer from '../footer/footer';
import Map2 from '../map/map copy';
import styles from './mychild.module.css'
import firebaseapp from '../../service/firebase'
import text from '../../raspberry/text.txt'
import gpstxt from '../../raspberry/gps.txt'
import * as childs from '../../images'

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
  const [gpstxt, setGpstxt] = useState("")
  const [size, setSize] = useState({
    width: 460,
    height: 235
  })

  useEffect(() => {
    firebaseapp.database().ref(`${window.sessionStorage.getItem("childId")}`).once("value")
      .then(snapshot => {
        const value = snapshot.val();
        setChildinfo(value)
        // 이미지 크기에 따라 사이즈 설정해주는 부분
        // const image = new Image()
        // image.onload = () => {
        //   console.log(image.width)
        //   setSize( {
        //     width:image.width,
        //     height: image.height
        //   })
        // }
        // image.src = childs[childinfo.name]
      })
    fetch(text)
      .then(res => {
        return res.text()
      })
      .then(res => {
        setTxt(res)
      })
    fetch(gpstxt)
      .then(res => {
        return res.text()
      })
      .then(res => {
        setTxt(res)
      })
  }, [])


  const split_txt = txt.split("\n")
  const split_txt1 = split_txt[split_txt.length - 2] || '-'
  const split_txt2 = split_txt1.indexOf('2')
  const split_txt3 = split_txt1.substr(split_txt2, 16)
  console.log(split_txt3)

  return (
    <section>
      <Header />
      <ul className={styles.content}>
        <ul className={styles.child}>
          <img className={styles.childphoto} src={childs[childinfo.name]} alt="사진" />
          <ul className={styles.childinfo}>
            <h1 className={styles.childclass}>{childinfo.kindergarten.place_name} {childinfo.childclass}</h1>
            <h1 className={styles.childclass}>{childinfo.name}</h1>
          </ul>
        </ul>
        <ul className={styles.childinfo}>
          <ul className={styles.child}>
            <Map2 place_x={childinfo.kindergarten.x} place_y={childinfo.kindergarten.y} width={size.width} height={size.height} name={childinfo.kindergarten.place_name} place={childinfo.kindergarten} />
          </ul>
          {/* <h1 className={styles.tag}>아이가 {split_txt[split_txt.length - 2]} 승차하였습니다</h1> */}
          {/* <h1 className={styles.tag}>아이가 {split_txt3}분에 승차하였습니다</h1> */}
          <h1 className={styles.tag}>아이가 2021-10-31 14:44분에 승차하였습니다</h1>

        </ul>
      </ul>
      <Footer />
    </section >
  )
};
export default Mychild;