import React from "react";
import { Container } from "@material-ui/core";
import useStyles from "./style";
import clsx from "clsx";
import "./SongHugPage.scss";
import SongHug from "./SongHug/SongHug";

const SongHugPage = () => {
  const classes = useStyles();

  return (
    <div className="frame">
      <Container
        className={clsx(classes.container, "songHugContainer")}
        maxWidth="xl"
      >
        <SongHug />
      </Container>
    </div>
  );
};

export default SongHugPage;
