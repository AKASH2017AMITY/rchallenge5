import React, { useState } from 'react'
import styles from "./Navbar.module.css"
import AddContact from '../AddContact/AddContact';


function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  // function handleClick(prev){
  //   setIsOpen(!prev);
  // }
  return (
    <>
      <nav className={styles.navbar}>
        <div className={styles.left}>
          <img className={styles.image} src="/images/logos_firebase.jpg" alt="" />
          <h1 className={styles.heading}>Firebase Contact App</h1>
        </div>
        <div className={styles.right}>
          <input className={styles.search} type="search" placeholder='Search' />
          <h1 className={styles.add} onClick={()=>setIsOpen(true)} >+</h1>
        </div>
      </nav>
      {isOpen && <AddContact isOpen={isOpen} setIsOpen={setIsOpen}  />}
    </>
  )
}

export default Navbar
