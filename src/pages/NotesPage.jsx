import {useState} from "react"
import Notes from "../components/Notes"
import Main from "../components/Main"
import { Link } from "react-router-dom"

function NotesPage(props) {

  // loaded function
  const loaded = () => {
    return props.notes.map((note) => (
      <div key={note._id} className="note">
        <Link to={`/notes/${notes._id}`}><h1>{notes.name}</h1>
        </Link>
        <h3>{notes.title}</h3>
      </div>
    ));
  };

  const loading = () => {
    return <h1>Loading...</h1>;
  };

  return props.notes ? loaded() : loading();
}

export default NotesPage;

import { useState } from "react";
import { Link } from "react-router-dom"
import Main from "../components/Main"
import NotesPage from "../pages/NotesPage";

function Notes(props) {
  // state to hold formData
  const [ newForm, setNewForm ] = useState({
    name: "",
    title: "",
    content: "",
  });

  // handleChange function for form
  const handleChange = (event) => {
    setNewForm({ ...newForm, [event.target.name]: event.target.value });
  };

  // handle submit function for form
  const handleSubmit = (event) => {
    event.preventDefault();
    props.createNotes(newForm);
    setNewForm({
      name: "",
      title: "",
      content: "",
    });
  };

  // loaded function
  const loaded = () => {
    return props.notes.map((note) => (
      <div key={note._id} className="note">
        <Link to={`/notes/${note._id}`}><h1>{note.name}</h1></Link>
        <h3>{note.title}</h3>
        <h3>{note.content}</h3>
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
          placeholder="content URL"
          onChange={handleChange}
        />
        <input type="submit" value="Create Note" />
      </form>
      {props.notes ? loaded() : loading()}
    </section>
  );
}

export default Notes;
