import React from 'react'
import styles from './Card.module.css'
import { BiUserCircle } from 'react-icons/bi'
import { RiEditCircleLine } from 'react-icons/ri'
import { FaRegTrashAlt } from 'react-icons/fa'

function Card({contact}) {
  return (
    <div key={contact.id} className={styles.Container}>
              <div className={styles.cardContainer}>
                <div className={styles.leftSide}>
                  <span>
                    <BiUserCircle size={70}  color={"#F6820C"}/>
                  </span>
                  <div>
                    <h1 className={styles.heading1}>{contact.name}</h1>
                    <h2 >{contact.email}</h2>
                  </div>

                </div>
                <div className={styles.rightSide}>
                  <RiEditCircleLine size={55} />
                  <FaRegTrashAlt size={50} color='#323334' color={"#F6820C"}/>
                </div>
              </div>
            </div>        
  )
}

export default Card
