import React from "react";
import ReactPlayer from "react-player";
import Button from "@material-ui/core/Button";

import "./SongHug.scss";

const SongHug = () => {
  const config = {
    youtube: {
      playerVars: { autoplay: 1 },
    },
  };

  const handleSend = () => {};

  return (
    <div className="songHugContainer">
      <ReactPlayer
        url="https://www.youtube.com/watch?v=Okq8xHrIZ8I"
        config={config}
        playing={true}
      />
      <div className="description">
        Shaked sent you a <span className="songhug">SongHug!</span>
      </div>
      <Button className="sendButton" onClick={handleSend}>
        Send SongHug Back!
      </Button>
    </div>
  );
};

export default SongHug;
