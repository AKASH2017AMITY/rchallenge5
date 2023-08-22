import { useEffect, useState } from 'react';
import { db } from './Config/firebase';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import { getDocs, collection } from 'firebase/firestore'
import Card from './Components/Card/Card';

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
          contacts.map((contact) =>  {return <Card key={contact.id} contact={contact}/>})
        }
      </div>  
    </>
  );
}

export default App;
