import React, { useState } from "react";
import Header from "./Header";
import { Container } from "@material-ui/core";
import CardForm from "./CardForm/CardForm";
import useStyles from "./style";
import CardPreview from "./CardPreview/CardPreview";
import Button from "@material-ui/core/Button";
import GIFs from "./resources/gifs";
import Frames from "./resources/frames";
import Typography from "@material-ui/core/Typography";

const App = () => {
  const classes = useStyles();
  const [title, setTitle] = useState("");
  const [image, setImage] = useState(GIFs[0]);
  const [musicLink, setMusicLink] = useState("");
  const [description, setDescription] = useState("");
  const [frame, setFrame] = useState("");


  const handleSend = () => {
    
  }

  return (
    <div>
      <Header />
      <Container className={classes.container} maxWidth="md">
        <Typography variant="h4" className={classes.pageTitle}>
          Design your own song card!
        </Typography>
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
          <div>
            <CardPreview
              title={title}
              image={image}
              musicLink={musicLink}
              description={description}
              frame={frame}
            />
          </div>
        </div>
        <Button variant="contained" className={classes.sendButton}>
          SEND
        </Button>
      </Container>
    </div>
  );
};

export default App;
