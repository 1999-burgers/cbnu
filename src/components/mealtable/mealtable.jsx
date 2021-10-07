import React from 'react';
import Header from '../header/header';
import Footer from '../footer/footer';
import styles from './mealtable.module.css'
import text from './meal/1.txt'
import { useEffect, useState } from 'react';
const Mealtable = (props) => {
  const now = new Date()
  const [txt, setTxt] = useState("")
  const [month, setMonth] = useState(now.getMonth() + 1)
  const [date, setDate] = useState(now.getDate())

  useEffect(() => {
    fetch(text)
      .then(res => {
        console.log(text, "처음")
        return res.text()
      })
      .then(res => {
        console.log(text, "나중")
        setTxt(res)
      })
    console.log(text)
  }, [])

  const onDecrease = () => {
    setDate(date - 1);
  }
  const onIncrease = () => {
    setDate(date + 1);
  }


  return (
    <>
      <Header />
      <content className={styles.content}>
        <div className={styles.textarea}>
          <button className={styles.arrow} onClick={onDecrease}>
            <i class="fas fa-chevron-left"></i>
          </button>
          <div className={styles.text}>{month}월 {date}일 식단</div>
          <button className={styles.arrow} onClick={onIncrease}>
            <i class="fas fa-chevron-right"></i>
          </button>
          {/* <button >오살표</button> */}
        </div>
        <ul className={styles.li}>
          <li className={styles.meal}>아침
            <li>{txt}</li>
            <li></li>
            <li></li>
          </li>
          <li className={styles.meal}>간식
            <li>밥</li>
            <li>밥</li>
            <li>밥</li>
          </li>
          <li className={styles.meal}>점심
            <li>밥</li>
            <li>밥</li>
            <li>밥</li>
          </li>
        </ul>
      </content>
      <Footer />
    </>
  )
};
export default Mealtable;