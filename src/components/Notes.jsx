
<<<<<<< HEAD
const Notes = (props) => {
  return (
    <div className="Notes">
      <h1>Notes</h1>
      {/* <h5 className="notes-name">{props.name}</h5>
      <h5 className="notes-title">{props.title}</h5>
      <p className="notes-content">{props.content}</p> */}
    </div>
  )
=======
function Notes({notes}) {

// loaded function
  const loaded = () => {
    return notes.map((note) => (
     <div key={note._id} className="note">
        <h1>{note.name}</h1>
        <h3>{note.title}</h3>
        <h3>{note.content}</h3>   
      </div>   

        
      //  console.log(note)
    ));
  };

  const loading = () => {
    return <h1>Loading...</h1>;
  };

  return notes ? loaded() : loading();
>>>>>>> main
}

export default Notes;