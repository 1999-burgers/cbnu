import React, { useState } from "react";
import styles from './signin.module.css'
import { auth } from '../../service/firebase'
import { BrowserRouter, Switch, useHistory } from 'react-router-dom';

const Signin = ({ authService }) => {
  const childobj = new Object();
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [newAccount, setNewAccount] = useState(true);

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
    try {
      let data;
      data = await auth.signInWithEmailAndPassword(email, password);
      history.push('/mychild')
      console.log(event)
    } catch (error) {
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



  const goTo = userID => {
    console.log(userID, "됐")
    if (childobj.userID != null) {
      history.push('/mychild')
      console.log("정보있어서 마이차일드로옴")
    }
    else {
      history.push('/kindergarten')
      console.log("정보없어서 킨더가든으로옴")
    }
  }


  const onLogin = event => {
    authService
      .login(event.currentTarget.id)
      .then(console.log)
    //   .then(data => goTo(data.user.id))
    // console.log(data, "데이터는 이거임")
    // console.log(event.currentTarget.id, "로그인 확인이")
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