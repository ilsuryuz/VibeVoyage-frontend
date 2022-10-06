import { click } from "@testing-library/user-event/dist/click";
import { useState } from "react";

function NotesPage(props) {

  const notes = props.notes;
  const defaultNoteState = {
    name: "",
    title: "",
    content: "",
  };
  const [newForm, setNewForm] = useState(defaultNoteState);

  //listen for changes in new note input fields
  const handleChange = (event) => {
    setNewForm({ ...newForm, [event.target.name]: event.target.value });
  };
  // handlesubmit for adding notes
  const handleSubmit = (event) => {
    event.preventDefault();
    props.createNotes(newForm);
    setNewForm(defaultNoteState);
  };

  // delete function for notes
  const removeNote = (note) => {
    props.deleteNotes(note._id)
  }

  const [editForm, setEditForm] = useState(defaultNoteState)

  const handleEditChange = event => {
    setEditForm({ ...editForm, [event.target.name]: event.target.value })
  }

  const handleEdit = event => {
    event.preventDefault();
    props.updateNotes(editForm, editForm._id)
  }

  // state functions to render edit form on button click!
  const [clicked, setClicked] = useState(false)

  const editClicked = (note) => {
    setEditForm(note)
    setClicked(true)
  }

  const editUnClicked = (note) => {
    setEditForm(note)
    setClicked(false)
  }
  // icebox: make the button state, individual to each note

  // loaded function
  const loaded = () => {
    return notes.map((note) => (
      <div key={note._id} className="note">
        <h1>{note.name}</h1>
        <h3>{note.title}</h3>
        <h3>{note.content}</h3>
        {
          clicked === true && editForm._id === note._id ?
            <>
              <div className='noteEdit'>
                <form onSubmit={handleEdit}>
                  <input
                    type="text"
                    value={editForm.name}
                    name="name"
                    placeholder='name'
                    onChange={handleEditChange}
                  />
                  <input
                    type="text"
                    value={editForm.title}
                    name="title"
                    placeholder="title"
                    onChange={handleEditChange}
                  />
                  <input
                    type="text"
                    value={editForm.content}
                    name="content"
                    placeholder="content"
                    onChange={handleEditChange}
                  />
                  <input type="submit" value="Update Note" />
                </form>
              </div></>
            :
            <></>
        }
        <div>
          <button onClick={() => {
            clicked ? editUnClicked(defaultNoteState) : editClicked(note)
          }
          }>{clicked === true && editForm._id === note._id ? "Close Edit Form" : "Edit"}</button>
          <button onClick={() => {
            removeNote(note);
          }
          }>Delete</button>
        </div>
      </div>
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
          value={newForm.content}
          name="content"
          placeholder="content"
          onChange={handleChange}
        />
        <input type="submit" value="Add Note" />
      </form>
      {props.notes ? loaded() : loading()}
    </section>
  );
}
export default NotesPage;
