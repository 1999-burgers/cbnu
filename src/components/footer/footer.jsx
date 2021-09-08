import React from 'react';
import styles from './footer.module.css'
const footer = (props) => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.navlogo}>
        <i className="fas fa-shapes"></i>
        <a className={styles.navlogotext}>내아이지킴이</a>
      </div>
      <ul className={styles.navicons}>
        <i class="fab fa-github"></i>
        <a className={styles.git} href="https://github.com/chestnut1044">git</a>
      </ul>

    </nav >
  )
};
export default footer;