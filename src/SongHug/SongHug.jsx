import React from "react";
import ReactPlayer from "react-player";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";

import "./SongHug.scss";

const SongHug = (props) => {
  const config = {
    youtube: {
      playerVars: { autoplay: 1 },
    },
  };

  const handleSend = (email) => {
    console.log(email);
  };

  return (
    <div className="songHugContainer">
      <ReactPlayer
        url={props.displayLink}
        config={config}
        playing={true}
      />
      <div className="description">
        {props.sender} sent you a <span className="songhug">SongHug!</span>
      </div>
      <Link to={`/sendSong?email=${props.senderMail}`}>
        <Button className="sendButton" onClick={() => handleSend(props.sender)}>
          Send SongHug Back!
        </Button>
      </Link>
    </div>
  );
};

export default SongHug;
