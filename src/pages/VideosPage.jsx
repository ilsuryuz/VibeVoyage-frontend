import { useState } from "react";
import { Link } from "react-router-dom"

function VideoPage (props) {

  const [ newForm, setNewForm ] = useState({
    name: "",
    url: "",
  });


  const handleChange = (event) => {
    setNewForm({ ...newForm, [event.target.name]: event.target.value });
  };

 
  const handleSubmit = (event) => {
    event.preventDefault();
    props.createVideo(newForm);
    setNewForm({
      name: "",
      image: "",
      title: "",
    });
  };

 
  const loaded = () => {
    return props.videos.map((video) => (
      <div key={video._id} className="video">
        <Link to={`/videos/${video._id}`}><h1>{video.name}</h1></Link>
        <url src={video.url} alt={video.name} />
        <h3>{video.title}</h3>
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
          name="video name"
          placeholder="video name"
          onChange={handleChange}
        />
        <input
          type="text"
          value={newForm.image}
          name="video"
          placeholder="video URL"
          onChange={handleChange}
        />
        <input
          type="text"
          value={newForm.title}
          name="title"
          placeholder="title"
          onChange={handleChange}
        />
        <input type="submit" value="Add Video" />
      </form>
      {props.videos ? loaded() : loading()}
    </section>
  );
}

export default VideoPage;