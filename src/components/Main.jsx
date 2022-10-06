import { useEffect, useState } from "react";
import { Route, Switch } from "react-router-dom";
import IndexPage from "../pages/IndexPage";
import NotesPage from "../pages/NotesPage";
import VideosPage from "../pages/VideosPage";
import AboutPage from "../pages/AboutPage";


function Main(props) {
  const [notes, setNotes] = useState(null);

  const URL = "https://vibe-voyage.herokuapp.com/";

  const getNotes = async () => {
    const response = await fetch(URL + "notes/");
    const data = await response.json();
    console.log(data)
    setNotes(data);
  };

  const createNotes = async (notes) => {

    await fetch(URL + "notes/", {
      method: "POST",
      headers: {
        "Content-Type": "Application/json",
      },
      body: JSON.stringify(notes),
    });

    getNotes();
  };

  const updateNotes = async (person, id) => {
    await fetch(URL + "notes/" + id, {
      method: "PUT",
      headers: {
        "Content-Type": "Application/json",
      },
      body: JSON.stringify(notes),
    })
    getNotes();
  }

  const deleteNotes = async (id) => {
    await fetch(URL + "notes/" + id, {
      method: "DELETE",
    })
    getNotes();
  }

  const getVideos = async () => {
    const response = await fetch(URL + "videos/");
    const data = await response.json();
    console.log(data)
    setNotes(data);
  };

const getVideo = async () => {
  const response = await fetch(URL);
  const data = await response.json();
  setVideo(data);
}

const createVideo = async video => {
  
  await fetch(URL, {
    method: "POST",
    headers: {
      "Content-Type": "Application/json",
    },
    body: JSON.stringify(ideo),
  });
//Update Video Directory
  getVideo();
}

const updateVideo = async (video, id) => {
  // makes request to get video
  await fetch(URL + id, {
    method: "PUT",
    headers: {
      "Content-Type": "Application/json",
    },
    body: JSON.stringify(video),
  });

  getVideo();
}

const deleteVideo = async id => {
  
  await fetch(URL + id, {
    method: "DELETE",
  })
  
  getVideo();
}
  useEffect(() => { getNotes(); getVideos() }, []);


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
          <VideosPage
          video={video}
          updateVideo={updateVideo}
          deleteVideo={deleteVideo}
          createVideo={createVideo} />
        </Route>
        <Route path="/about">
          <AboutPage />
        </Route>
      </Switch>
    </main>
  );
}

export default Main;