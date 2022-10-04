
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
}

export default Notes;