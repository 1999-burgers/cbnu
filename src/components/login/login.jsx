import React from 'react';
import { useHistory } from 'react-router';
import styles from './login.module.css'


const Login = ({ authService }) => {
  const history = useHistory();
  const goTokindergarten = userID => {
    history.push({
      pathname: '/kindergarten',
      state: { id: userID },
    });
  };
  const onLogin = event => {
    authService
      .login(event.currentTarget.textContent)
      .then(data => goTokindergarten(data.user.uid))
  }
  return (
    <container className={styles.image}>
      <div className={styles.onLogin}>
        <div className={styles.logo}>
          <div className={styles.icon}><i className="fas fa-shapes"></i></div>
          <h1 className={styles.logotext}>내 아이 지킴이</h1>
        </div>
        <button className={styles.loginbutton} onClick={onLogin}>Google</button>
      </div>

    </container>
  )
};
export default Login;