import React, { useEffect } from "react";
import { Container } from "@material-ui/core";
import useStyles from "./style";
import clsx from "clsx";
import { useLocation } from "react-router-dom";
import "./SongHugPage.scss";
import SongHug from "./SongHug/SongHug";

const SongHugPage = () => {
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
        <SongHug
          receiver={query.get("receiver")}
          displayLink={query.get("displayLink")}
          sender={query.get("sender")}
          senderMail={query.get("senderMail")} />
      </Container>
    </div>
  );
};

export default SongHugPage;
