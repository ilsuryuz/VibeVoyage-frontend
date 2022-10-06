import { useState } from "react";

function VideosPage (props) {
  const [ newForm, setNewForm ] = useState({
    name: "",
    url: "",
  });

  // handle create video inputs change
  const handleChange = (event) => {
    setNewForm({ ...newForm, [event.target.name]: event.target.value });
  };

  // handle create form submit
  const handleSubmit = (event) => {
    event.preventDefault();
    props.createVideo(newForm);
    setNewForm({
      name: "",
      url: "",
       });
  };

  const removeVideo = (video) => {
    props.deleteVideo(video._id)
  }

  const loaded = () => {
    return props.video.map((video) => (
      <div key={video._id} className="video">
        <a href={video.url} alt={video.name} >{video.name}</a>
        <div>
        <button 
        onClick={() => {removeVideo(video)}}>Delete</button>
        </div>
      </div>
    ));
  };

  const loading = () => {
    return <h1>Vibe Loading...</h1>;
  };

  return (
    <section>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={newForm.name}
          name="name"
          placeholder="video name"
          onChange={handleChange}
        />
        <br></br>
        <input
          type="text"
          value={newForm.url}
          name="url"
          placeholder="video URL"
          onChange={handleChange}
        />
        <input type="submit" value="Add New Video" />
      </form>
      {props.video ? loaded() : loading()}
    </section>
  );
}

export default VideosPage;
//Help From Office Hrs