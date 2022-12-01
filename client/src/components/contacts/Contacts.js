import { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const Contacts = () => {
  const [contacts, setContacts] = useState([])

  const { listId } = useParams()

  useEffect( () => {
    axios.get(`/api/lists/${listId}/contacts`)
      .then( res => setContacts(res.data))
      .catch( err => console.log(err))
  }, [])

  const addContact = (contact) => {
    axios.post(`/api/lists/${listId}/contacts`, { contact })
      .then( res => setContacts([...contacts, res.data]))
      .catch( err => console.log(err))
  }

  return(
    <>
      <h1>All Contacts</h1>
    </>
  )
}

export default Contacts;