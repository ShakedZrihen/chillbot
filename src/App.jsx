import React, { useState } from "react";
import Header from "./Header";
import { Container } from "@material-ui/core";
import CardForm from "./CardForm/CardForm";
import useStyles from "./style";
import CardPreview from "./CardPreview/CardPreview";
import Button from "@material-ui/core/Button";

export default function App() {
  const classes = useStyles();
  const [title, setCardTitle] = useState("");
  const [image, setCrdImage] = useState("");
  const [musicLink, setMusicLink] = useState("");
  const [description, setDescription] = useState("");
  const [frame, setFrame] = useState("");

  return (
    <div>
      <Header />
      <Container className={classes.container} maxWidth="md">
        <div className={classes.contentContainer}>
          <CardForm />
          <div>
            <CardPreview />
          </div>
        </div>
        <Button
          variant="contained"
          color="secondary"
          className={classes.sendButton}
        >
          SEND
        </Button>
      </Container>
    </div>
  );
}
