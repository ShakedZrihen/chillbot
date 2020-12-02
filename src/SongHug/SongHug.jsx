import React from "react";
import ReactPlayer from "react-player";
import Button from "@material-ui/core/Button";

import "./SongHug.scss";

const SongHug = (props) => {
  const config = {
    youtube: {
      playerVars: { autoplay: 1 },
    },
  };

  const handleSend = () => {};

  return (
    <div className="songHugContainer">
      <ReactPlayer
        url={props.displayLink}
        config={config}
        playing={true}
      />
      <div className="description">
        {props.name} sent you a <span className="songhug">SongHug!</span>
      </div>
      <Button className="sendButton" onClick={handleSend}>
        Send SongHug Back!
      </Button>
    </div>
  );
};

export default SongHug;
