import React from 'react'
import styles from "./Navbar.module.css"

function Navbar() {
  return (
    <nav className={styles.navbar}>
      <div className={styles.left}>
      <img className={styles.image}src="/images/logos_firebase.jpg" alt=""/>
      <h1 className={styles.heading}>Firebase Contact App</h1>
      </div>
      <div className={styles.right}>
        <input className={styles.search} type="search"  placeholder='Search'/>
        <h1 className={styles.add}>+</h1>
      </div>
    </nav>
  )
}

export default Navbar
