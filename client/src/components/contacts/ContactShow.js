import { useState } from 'react';
import ContactForm from './ContactForm'; 

const ContactShow = ({ id, first_name, last_name, email, phone, fav, updateContact, deleteContact }) => {
  const [editing, setEdit] = useState(false)
  
  return (
    <>
      {
        editing ?
        <>
          <ContactForm 
            id={id}
            first_name={first_name}
            last_name={last_name}
            email={email}
            phone={phone}
            fav={fav}
            updateContact={updateContact}
            setEdit={setEdit}
          />
          <button onClick={() => setEdit(false)}> 
            Cancel
          </button>
        </>
        :
        <>
          <h1>{first_name} {last_name}</h1>
          <h4>Email: {email}</h4>
          <h4>Phone: {phone}</h4>
          <h4>{fav ? "Favorite" : "" }</h4>
          <button onClick={() => setEdit(true)}>
            Edit
          </button>
          <button onClick={() => deleteContact(id)}>
            Delete
          </button>
          <button>Comments</button>
        </>
      }    
    </>
  )
}

export default ContactShow;