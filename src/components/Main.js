import { useEffect, useState } from "react";
import { Route, Switch } from "react-router-dom";
import IndexPage from "../pages/IndexPage";
import NotesPage from "../pages/NotesPage";
import VideoPage from "../pages/VideoPage";
import Footer from "./Footer";
import Header from "./Header";

function Main(props) {
  const [ notes, setNotes ] = useState(null);

  const URL = "http://localhost:4000/notes/";

  const getNotes = async () => {
    const response = await fetch(URL);
    const data = await response.json();
    console.log(data)
    setNotes(data);
  };

  const createNotes = async (notes) => {
   
    await fetch(URL, {
      method: "POST",
      headers: {
        "Content-Type": "Application/json",
      },
      body: JSON.stringify(notes),
    });
  
    getNotes();
  };

  useEffect(() => {getNotes()}, []);

  return (
    <main>
      <Header />
      <Switch>
        <Route exact path="/">
          <IndexPage />
        </Route>
        <Route path="/notes">
          <NotesPage notes={notes} createNotes={createNotes} />
        </Route>
        {/* <Route
          path="/notes/:id"
          render={(rp) => (
            <NotesPage
              {...rp}
            />
          )}
          /> */}
        {/* <Route>
            <VideoPage/>
        <Route/> */}
      </Switch>
      <Footer />
    </main>
    );
  }

export default Main;