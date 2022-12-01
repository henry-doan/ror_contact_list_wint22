import { useState, useEffect } from 'react';

const ListForm = ({ addList, id, lname, desc, updateList, setEdit }) => {
  const [list, setList] = useState({ lname: '', desc: '' })

  useEffect(() => {
    if (id) {
      setList({ lname, desc })
    }
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault()
    if (id) {
      updateList(id, list)
      setEdit(false)
    } else {
      addList(list)
    }
    setList({ lname: '', desc: '' })
  }

  return (
    <>
      <h1>{id ? "Update" : "Create"} List</h1>
      <form onSubmit={handleSubmit}>
        <label>List Name</label>
        <input 
          name='lname' 
          value={list.lname} 
          onChange={(e) => setList({ ...list, lname: e.target.value })} 
          required
        />
        <textarea
          name='desc' 
          value={list.desc} 
          onChange={(e) => setList({ ...list, desc: e.target.value })} 
          required
        ></textarea>
        <button type='submit'>Submit</button>
      </form>
    </>
  )
}

export default ListForm;