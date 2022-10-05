import { useState } from "react";

function Notes({notes}) {
  const [ newForm, setNewForm ] = useState({
    name: "",
    title: "",
    content: "",
  });
  const handleChange = (event) => {
    setNewForm({ ...newForm, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    notes.createNotes(newForm);
    setNewForm({
      name: "",
      title: "",
      content: "",
    });
  };

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
    return (
      <section>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={newForm.name}
            name="name"
            placeholder="name"
            onChange={handleChange}
          />
          <input
            type="text"
            value={newForm.title}
            name="title"
            placeholder="title"
            onChange={handleChange}
          />
          <input
            type="text"
            value={newForm.image}
            name="content"
            placeholder="content"
            onChange={handleChange}
          />
          <input type="submit" value="Add Note" />
        </form>
        {Notes ? loaded() : loading()}
      </section>
    );
  }
  export default Notes;
