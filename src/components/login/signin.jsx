import React, { useState } from "react";
import styles from './signin.module.css'
import { auth } from '../../service/firebase'
import { useHistory } from 'react-router-dom';
import firebaseapp from '../../service/firebase'

const Signin = ({ authService }) => {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // 아이디창에 글씨띄우기
  const onChange = (event) => {
    const { target: { name, value } } = event;
    if (name === 'email') {
      setEmail(value)
    } else if (name === "password") {
      setPassword(value);
    }
  }

  // e-mail 로그인
  const onSubmit = async (event) => {
    // 에러 없을 때
    try {
      let data;
      // 로그인
      data = await auth.signInWithEmailAndPassword(email, password);
      goTo(data.user.uid)
    }
    // 에러 발생 시 
    catch (error) {
      // 계정 없을 때
      if (error.code == 'auth/user-not-found') {
        var result = window.confirm("계정정보가 없습니다. 회원가입을 하시겠습니까?");
        if (result == true) {
          history.push('/join')
        }
      }
      // 비번 틀렸을때
      else if (error.code == 'auth/wrong-password') {
        window.alert("잘못된 비밀번호 입니다.")
      }
      console.log("에러", error, error.code)
    }
  }

  // 라우팅기능
  const goTo = (childID) => {
    window.sessionStorage.setItem("childId", childID);
    const promise = new Promise((resolve, reject) => {
      firebaseapp.database().ref(`${childID}`).once('value').then(snapshot => {
        var value = snapshot.val()
        value ? resolve(value) : reject(childID);
      })
    })
    promise
      .then(value => {
        history.push({
          pathname: '/mychild',
          state: { id: value },
        })
        console.log("정보있어서 마이차일드로옴")
      })
      .catch(childID => {
        history.push({
          pathname: '/kindergarten',
          state: { id: childID },
        })
        console.log("정보없어서 킨더가든으로", childID)
      })
  }

  // 플랫폼으로 로그인시 uid를 받아서 kindergarten or mychild로 라우팅
  const onLogin = event => {
    authService
      .login(event.currentTarget.id)
      .then(data => goTo(data.user.uid))
  };

  // e-mail로 회원가입해
  const onSignup = () => {
    history.push({
      pathname: '/join'
    })
  }

  return (
    <div className="sign-container">
      <div className="sign-up-wrap">
        <form className={styles.loginform}>
          <div className={styles.inputform}>
            <input
              className={styles.inputid}
              type="email"
              placeholder="이메일을 입력하세요."
              name="email"
              required value={email}
              onChange={onChange}
            />
            <input
              className={styles.inputpw}
              type="password"
              placeholder="비밀번호를 입력하세요."
              name="password"
              required value={password}
              onChange={onChange}
            />
          </div>
        </form>
        <button
          className={styles.loginbutton}
          onClick={onSubmit}
          type="submit">로그인
        </button>
        <hr></hr>
        <p className={styles.text}>
          간편하게 시작하기
        </p>
        <div className={styles.platform}>
          <button id='Google' className={styles.buttongoogle} onClick={onLogin}><i class="fab fa-google"></i></button>
          <button id='Facebook' className={styles.buttonfacebook} onClick={onLogin}><i class="fab fa-facebook-f"></i></button>
          {/* <button id='Twitter' className={styles.buttontwitter} onClick={onLogin}><i class="fab fa-twitter"></i></button> */}
          <button className={styles.buttonemail} onClick={onSignup}><i class="fas fa-envelope"></i></button>
        </div>
      </div>
    </div>
  );
};

export default Signin;