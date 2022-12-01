
const ListShow = ({ id, lname, desc }) => {

  return (
    <>
      <h1>{lname}</h1>
      <p>{desc}</p>
      <button>Edit</button>
      <button>Delete</button>
      <button>Contacts</button>
    </>
  )
}

export default ListShow;