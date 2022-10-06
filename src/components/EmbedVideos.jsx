import React from 'react'
import PropTypes from "prop-types";

const EmbedVideo = ({ embedId }) => (

    <div className="video-responsive">
        <div className="VideoIntroText">
            <h1>Let's Vibe Out And Breathe Together</h1>
        </div>
        <div className="VideoItself">
            <iframe
                width="835"
                height="480"
                src={`https://www.youtube.com/embed/${embedId}`}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; gyroscope; picture-in-picture "
                allowFullScreen
                title="Embedded youtube"
            />
            <div className="VideoInputText">
                <h1>
                </h1>
            </div>
        </div>
    </div>
);

EmbedVideo.propTypes = {
    embedId: PropTypes.string.isRequired
};

export default EmbedVideo;
