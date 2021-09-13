import React from 'react';
import styles from './join.module.css'


const Join = ({ authService }) => {
  return (
    <container className={styles.image}>
      <div className={styles.onLogin}>
        <div className={styles.logo}>
          <div className={styles.icon}><i className="fas fa-shapes"></i></div>
          <h1 className={styles.logotext}>내 아이 지킴이</h1>
        </div>
      </div>

    </container>
  )
};
export default Join;

