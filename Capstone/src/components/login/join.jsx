import React, { useState } from "react";
import { auth } from '../../service/firebase'
import styles from './join.module.css'
import { BrowserRouter, Switch, useHistory } from 'react-router-dom';

const Join = () => {
  const history = useHistory();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repassword, setRePassword] = useState("");

  const onChange = (event) => {
    const { target: { name, value } } = event;
    if (name === 'text') {
      setName(value)
    } else if (name === "email") {
      setEmail(value);
    } else if (name === 'password') {
      setPassword(value)
    } else if (name === "repassword") {
      setRePassword(value);
    }
  }
  const onSubmit = async () => {
    try {
      if (password != repassword) {
        throw ("비번일치안함")
      }
      let data;
      data = await auth.createUserWithEmailAndPassword(email, password);
      var result = window.confirm("회원가입이 완료되었습니다. 로그인하시겠습니까?");
      if (result == true) {
        history.push('/login')
      }
      history.push('login')
    } catch (error) {
      // 이메일일 형식이 이상할 때
      if (error.code == 'auth/invalid-email') {
        window.alert("잘못된 이메일 형식입니다.")
      }
      // 이미 사용중인 이메일일때 
      else if (error.code == 'auth/email-already-in-use') {
        window.alert("이미 가입된 이메일입니다.")
      }
      // 비번가 6자 이하일때 
      else if (error.code == 'auth/weak-password') {
        window.alert("비밀번호는 6자 이상이여야 합니다.")
      }
      // 비밀번호가 일치하지 않음
      else if ('비번일치안함') {
        window.alert("비밀번호가 일치하지 않습니다.")
      }
      console.log("에러", error, error.code)
    }

  }

  return (
    <container className={styles.image}>
      <div className={styles.onLogin}>
        <div className={styles.logo}>
          <div className={styles.icon}><i className="fas fa-shapes"></i></div>
          <h1 className={styles.logotext}>내 아이 지킴이</h1>
        </div>
        <form className={styles.loginform}>
          <div className={styles.inputform}>
            <input
              className={styles.input}
              type="text"
              placeholder="이름"
              name="text"
              required value={name}
              onChange={onChange}
            />
            <input
              className={styles.input}
              type="email"
              placeholder="이메일 아이디"
              name="email"
              required value={email}
              onChange={onChange}
            />
            <input
              className={styles.input}
              type="password"
              placeholder="비밀번호"
              name="password"
              required value={password}
              onChange={onChange}
            />
            <input
              className={styles.input}
              type="password"
              placeholder="비밀번호 확인"
              name="repassword"
              required value={repassword}
              onChange={onChange}
            />
          </div>
        </form>
        <button
          className={styles.loginbutton}
          onClick={onSubmit}
          type="submit">회원가입
        </button>
      </div>
    </container>
  )
};
export default Join;
