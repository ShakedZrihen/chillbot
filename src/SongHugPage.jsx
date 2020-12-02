import React, { useEffect } from "react";
import { Container } from "@material-ui/core";
import useStyles from "./style";
import clsx from "clsx";
import { useParams, useLocation } from "react-router-dom";
import "./SongHugPage.scss";
import SongHug from "./SongHug/SongHug";

const SongHugPage = () => {
  const { name, displayLink } = useParams();
  const query = new URLSearchParams(useLocation().search)
  const classes = useStyles();

  useEffect(() => {
    document.body.id = "songHugBody";

    return () => {
      document.body.id = "";
    };
  }, []);

  return (
    <div className="songHugFrame">
      <Container
        className={clsx(classes.container, "songHugContainer")}
        maxWidth="xl"
      >
        <SongHug name={query.get("name")} displayLink={query.get("displayLink")} sendback={query.get("sendback")} />
      </Container>
    </div>
  );
};

export default SongHugPage;
