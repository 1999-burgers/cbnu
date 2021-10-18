import React, { useEffect, useState } from 'react';
import Header from '../header/header';
import Footer from '../footer/footer';
import styles from './notice.module.css'
import firebaseapp from '../../service/firebase';

const Notice = (props) => {
  const [title, setTitle] = useState("")
  const [content, setContent] = useState("")
  const [modalVisible, setModalVisible] = useState(false)
  const [modalVisible1, setModalVisible1] = useState(false)

  const [data, setData] = useState([])
  const [modalData, setModalData] = useState({

  })

  useEffect(() => {
    firebaseapp.database().ref("posts").on("value", (snapshot => {
      const value = snapshot.val()
      if (value == undefined) {
        setData([])
        return
      }
      setData(Object.keys(value).map((key) => {
        return {
          key,
          ...value[key]
        }
      })
      )
    }))
  }, [])

  const addPost = () => {
    firebaseapp.database().ref("posts").push({
      author: window.sessionStorage.getItem("childId"),
      title,
      content,
      createAt: new Date().getTime()
    })
      .then(() => {
        setModalVisible(false)
      })
  }

  const deletePost = (key) => {
    firebaseapp.database().ref("posts").child(key).remove()
      .then(() => {
        alert("삭제 완료 !")
      })
  }

  const postVisible = (key) => {
    setModalVisible1(true)
    setModalData(data.filter(val => val.key == key)[0])
  }

  useEffect(() => {
    console.log(data)
  }, [data])

  return (
    <>
      {
        modalVisible && (
          <div className={styles.modal}>
            <input placeholder="제목" value={title} onChange={(e) => setTitle(e.target.value)} />
            <textarea placeholder="내용" value={content} onChange={(e) => setContent(e.target.value)} />
            <button onClick={addPost}>글 올리기</button>
          </div>
        )
      }
      {
        modalVisible1 && (
          <div className={styles.modal}>
            <h3>{modalData.title}</h3>
            <span>{new Date(modalData.createAt).getMonth() + 1}월 {new Date(modalData.createAt).getDate()}일</span>
            <p style={{ whiteSpace: "pre-wrap" }}>
              {modalData.content}
            </p>
            <button onClick={() => setModalVisible1(false)}>닫기</button>
          </div>
        )
      }
      <Header />
      <section className={styles.content}>
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
          <button onClick={() => setModalVisible(true)}>새 글</button>
          {
            data.map(val =>
            (
              <div style={{ display: "flex" }}>
                <div onClick={() => postVisible(val.key)} className={styles.line}>{val.title} <span>{new Date(val.createAt).getMonth() + 1}월 {new Date(val.createAt).getDate()}일</span></div>
                {
                  val.author == window.sessionStorage.getItem("childId") && (
                    <button style={{ marginLeft: 10 }} onClick={() => deletePost(val.key)}>삭제</button>
                  )
                }
              </div>
            ))
          }
        </div>
      </section>

      <Footer />
    </>
  )
};

export default Notice;