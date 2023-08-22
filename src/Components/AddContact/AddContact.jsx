import React from 'react'
import styles from "./AddContact.module.css"
import {AiOutlineClose} from "react-icons/ai"

function AddContact({isOpen , setIsOpen}) {
  return (
    <>
      <div className={styles.add}>
      new Contact
      <AiOutlineClose size={30} title="Close" className={styles.close} onClick={()=>setIsOpen(false)}/>
    </div>
    <div  className={styles.blur}/>
    </>
  )
}

export default AddContact
