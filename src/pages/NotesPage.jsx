import {useState} from "react"
import Notes from "../components/Notes"
import Main from "../components/Main"

function NotesPage({notes}, {createNotes}) {
  
  // const notemap = notes.map((ele, index) => {
    return(
      <div>
        <h1>hi</h1>
      <Notes
        // name={ele.name}
        // title={ele.title}
        // content={ele.content}
        // key={index}        
        />
      </div>
    )
  }

//   return (
//     <div className="Notes">
//       <h1>Notes</h1>
//         <section>
//           {notemap}
//         </section>
//     </div>
//   )  
// }

export default NotesPage;