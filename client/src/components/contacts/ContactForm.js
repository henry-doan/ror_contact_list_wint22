import { useState, useEffect } from 'react';

const ContactForm = ({ addContact, id, first_name, last_name, email, phone, fav, updateContact, setEdit }) => {
  const [contact, setContact] = useState({ first_name: '', last_name: '', email: '', phone: '', fav: false })

  useEffect( () => {
    if (id) {
      setContact({ first_name, last_name, email, phone, fav })
    }
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault()
    if (id) {
      updateContact(id, contact)
      setEdit(false)
    } else {
      addContact(contact)
    }
    setContact({ first_name: '', last_name: '', email: '', phone: '', fav: false })
  }

  return(
    <>
      <h1>{id ? "Update" : "Create"} Contact</h1>
      <form onSubmit={handleSubmit}>
        <label>First name</label>
        <input 
          name='first_name'
          value={contact.first_name}
          onChange={(e) => setContact({...contact, first_name: e.target.value })}
          required
        />
        <label>Last name</label>
        <input 
          name='last_name'
          value={contact.last_name}
          onChange={(e) => setContact({...contact, last_name: e.target.value })}
          required
        />
        <label>Email</label>
        <input 
          type='email'
          name='email'
          value={contact.email}
          onChange={(e) => setContact({...contact, email: e.target.value })}
          required
        />
        <label>Phone</label>
        <input 
          type='phone'
          name='phone'
          value={contact.phone}
          onChange={(e) => setContact({...contact, phone: e.target.value })}
          required
        />
        <label>Favorite</label>
        <input 
          type='checkbox'
          name='fav'
          value={contact.fav}
          checked={contact.fav}
          onChange={(e) => setContact({...contact, fav: e.target.checked })}
        />
        <button type='submit'>Submit</button>
      </form>
    </>
  )
}

export default ContactForm;