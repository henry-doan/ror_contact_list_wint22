import { useState } from 'react';
import ListForm from './ListForm';

const ListShow = ({ id, lname, desc, updateList, deleteList }) => {
  const [editing, setEdit] = useState(false)

  return (
    <>
      {
        editing ?
          <>
            <ListForm 
              id={id}
              lname={lname}
              desc={desc}
              updateList={updateList}
              setEdit={setEdit}
            />
            <button onClick={() => setEdit(false)}>
              Cancel
            </button>
          </>
        :
        <>
          <h1>{lname}</h1>
          <p>{desc}</p>
          <button onClick={() => setEdit(true)}>
            Edit
          </button>
          <button onClick={() => deleteList(id)}>
            Delete
          </button>
          <button>Contacts</button>
        </>
      }
    </>
  )
}

export default ListShow;