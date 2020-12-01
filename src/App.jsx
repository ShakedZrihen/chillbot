import React, { useState } from "react";
import Header from "./Header";
import { Container } from "@material-ui/core";
import CardForm from "./CardForm/CardForm";
import useStyles from "./style";
import clsx from "clsx";
import "./style.scss";

const App = () => {
  const classes = useStyles();

  return (
    <div className="frame">
      <Container
        className={clsx(classes.container, "songHugContainer")}
        maxWidth="xl"
      >
        <Header />
        <div className={classes.contentContainer}>
          <CardForm />
        </div>
      </Container>
    </div>
  );
};

export default App;
