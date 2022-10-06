import React from 'react'
import PropTypes from "prop-types";

const EmbedVideo = ({embedId}) => (
    <div className="video-responsive">
<iframe
width="835"
height="480"
src={`https://www.youtube.com/embed/${embedId}`}
frameBorder="0"
allow="accelerometer; autoplay; clipboard-write; gyroscope; picture-in-picture "
allowFullScreen
title="Embedded youtube"
/> 
</div>
);

EmbedVideo.propTypes = {
    embedId: PropTypes.string.isRequired
};

export default EmbedVideo;
