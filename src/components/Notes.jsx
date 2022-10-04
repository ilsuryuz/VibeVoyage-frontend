import {useState} from "react"
import Notes from "../components/Notes"
import Main from "../components/Main"
import { Link } from "react-router-dom"

function NotesPage(props) {

  // loaded function
  const loaded = () => {
    return props.notes.map((note) => (
     console.log(note)
    ));
  };

}

export default Notes;