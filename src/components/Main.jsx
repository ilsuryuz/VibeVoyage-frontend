import { useEffect, useState } from "react";
import { Route, Switch } from "react-router-dom";
import IndexPage from "../pages/IndexPage";
import NotesPage from "../pages/NotesPage";
import VideosPage from "../pages/VideosPage";
import AboutPage from "../pages/AboutPage";


function Main(props) {
  const [notes, setNotes] = useState(null);

  const URL = "https://vibe-voyage.herokuapp.com/notes";

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

  useEffect(() => { getNotes() }, []);

  return (
    <main>
      <Switch>
        <Route exact path="/">
          <IndexPage />
        </Route>
        <Route path="/notes">
          <NotesPage notes={notes} createNotes={createNotes} />
        </Route>
        <Route
          path="/notes/:id"
          render={(rp) => {
            return (
              <NotesPage
                {...rp}
              />
            )
          }}
        />
        <Route path="/meditation">
          <VideosPage />
        </Route>
        <Route path="/about">
          <AboutPage />
        </Route>
      </Switch>
    </main>
  );
}

export default Main;