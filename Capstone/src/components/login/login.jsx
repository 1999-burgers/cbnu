import React from 'react';
import Signin from './signin'
import styles from './login.module.css'

const Login = ({ authService, childRepository }) => {

  return (
    <container className={styles.image}>
      <div className={styles.onLogin}>
        <div className={styles.logo}>
          <div className={styles.icon}><i className="fas fa-shapes"></i></div>
          <h1 className={styles.logotext}>내 아이 지킴이</h1>
        </div>
        <Signin authService={authService} childRepository={childRepository} />
      </div>

    </container>
  )
};
export default Login;


