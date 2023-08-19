import { useEffect, useState } from 'react';
import { db } from './Config/firebase';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import { getDocs, collection } from 'firebase/firestore'
import { BiUserCircle } from 'react-icons/bi'
import { RiEditCircleLine } from 'react-icons/ri'
import { FaRegTrashAlt } from 'react-icons/fa'

function App() {

  const [contacts, setContacts] = useState([]);

  useEffect(() => {

    const getContacts = async () => {
      try {
        const contactsRef = collection(db, "contacts");
        const contactsSnapshot = await getDocs(contactsRef);
        const contactsList = contactsSnapshot.docs.map((doc) => {
          return {
            id: doc.id,
            ...doc.data(),
          }
        })
        setContacts(contactsList);

      } catch (error) {
        console.log("error");
      }
    }
    getContacts();
  }, []);



  return (
    <>
      <div style={{ margin: 0 }}>
        <Navbar />
      </div>
      <div>
        {
          contacts.map((contact) => {
            return <div key={contact.id} className="Container">
              <div className="cardContainer">
                <div className='leftSide'>
                  <span>
                    <BiUserCircle size={70}  color='#323334'/>
                  </span>
                  <div>
                    <h1 className='heading1'>{contact.name}</h1>
                    <h2 className='heading2'>{contact.email}</h2>
                  </div>

                </div>
                <div className='rightSide'>
                  <RiEditCircleLine size={55} />
                  <FaRegTrashAlt size={50} color='#323334' />
                </div>
              </div>
            </div>
          })
        }
      </div>
    </>
  );
}

export default App;
