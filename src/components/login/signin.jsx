import React, { useState } from "react";
import { Link } from "react-router-dom";
import { auth } from "../../service/firebase";
import styles from './signin.module.css'

const Signin = ({ authService }) => {
  const signIn = (email, password) => {
    return auth().signInWithEmailAndPassword(email, password);
  };
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleOnChange = (e) => {
    const type = e.target.name;
    if (type === "email") {
      setEmail(e.target.value);
    } else if (type === "password") {
      setPassword(e.target.value);
    }
  };

  const handleOnSubmit = async (event) => {
    event.preventDefault();
    if (email !== "" && password !== "") {
      try {
        await signIn(email, password);
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <div className="sign-container">
      <div className="sign-up-wrap">
        <form className={styles.loginform} onSubmit={handleOnSubmit}>
          <div className={styles.inputform}>
            <input
              className={styles.inputid}
              type="email"
              placeholder="이메일을 입력하세요."
              name="email"
              value={email}
              onChange={handleOnChange}
            />
            <input
              className={styles.inputpw}
              type="password"
              placeholder="비밀번호를 입력하세요."
              name="password"
              value={password}
              onChange={handleOnChange}
            />
            <button className={styles.loginbutton} type="submit">로그인</button>
          </div>
        </form>
        <hr></hr>
      </div>
    </div >
  );
};

export default Signin;