import React, { useState } from "react";
import styles from './signin.module.css'
import { auth } from '../../service/firebase'

const Signin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [newAccount, setNewAccount] = useState(true);

  const onChange = (event) => {
    const { target: { name, value } } = event;
    if (name === 'email') {
      setEmail(value)
    } else if (name === "password") {
      setPassword(value);
    }
  }
  const onSubmit = async (event) => {
    event.preventDefault();
    console.log(event.currentTarget)
    try {
      let data;
      if (newAccount) {
        // create account
        data = await auth.createUserWithEmailAndPassword(email, password);
      } else {
        // login
        data = await auth.signInWithEmailAndPassword(email, password);
      }
      console.log(data);
    } catch (error) {
      console.log(error)
    }
  }
  const toggleAccount = () => setNewAccount((prev) => !prev);

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
          value={newAccount ? "Create Account" : "Login"}
          onClick={onSubmit}
          type="submit">로그인
        </button>
        <hr></hr>
      </div>
    </div >
  );
};

export default Signin;