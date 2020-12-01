import React, { useState } from "react";
import Header from "./Header";
import { Container } from "@material-ui/core";
import CardForm from "./CardForm/CardForm";
import useStyles from "./style";
import GIFs from "./resources/gifs";
import Frames from "./resources/frames";
import clsx from 'clsx';
import "./style.scss";

const App = () => {
  const classes = useStyles();
  const [title, setTitle] = useState("");
  const [image, setImage] = useState(GIFs[0]);
  const [musicLink, setMusicLink] = useState("");
  const [description, setDescription] = useState("");
  const [frame, setFrame] = useState("");

  const handleSend = () => {};

  return (
    <div className="frame">
      <Container
        className={clsx(classes.container, "songHugContainer")}
        maxWidth="xl"
      >
        <Header />
        <div className={classes.contentContainer}>
          <CardForm
            title={title}
            setTitle={setTitle}
            image={image}
            setImage={setImage}
            musicLink={musicLink}
            setMusicLink={setMusicLink}
            description={description}
            setDescription={setDescription}
            frame={frame}
            setFrame={setFrame}
            gifs={GIFs}
            frames={Frames}
          />
        </div>
      </Container>
    </div>
  );
};

export default App;
