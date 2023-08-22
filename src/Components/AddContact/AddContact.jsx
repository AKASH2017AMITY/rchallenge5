import React, { useState } from 'react'
import styles from "./AddContact.module.css"
import {AiOutlineClose} from "react-icons/ai"

function AddContact({setIsOpen}) {
  const[name,setName]= useState("");
  const[email,setEmail]= useState("");

  // console.log(name);
  // console.log(email);

  return (
    <>
      <div className={styles.add}>
      <label htmlFor="">Name</label><br />
      <input className={styles.nameInput} type="text" value={name} onChange={(e)=>{setName(e.target.value)}}/><br />
      <label htmlFor="">Email</label>
      <input className={styles.emailInput} type="email" value={email} onChange={(e)=>{setEmail(e.target.value)}}/>
      <button>Submit</button>
      <AiOutlineClose size={30} title="Close" className={styles.close} onClick={()=>setIsOpen(false)}/>
    </div>
    <div  className={styles.blur} onClick={()=>setIsOpen(false)}/>
    </>
  )
}

export default AddContact
