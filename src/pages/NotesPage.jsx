import {useState} from "react"
import Notes from "../components/Notes"
import Main from "../components/Main"

function NotesPage({notes}, {createNotes}) {

    return(
      <div>
        {/* <h1>hi</h1> */}
      <Notes notes={notes} />
      </div>
    )
  }

export default NotesPage;

