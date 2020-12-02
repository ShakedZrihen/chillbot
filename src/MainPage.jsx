import React, { useEffect } from "react";
import "./MainPage.scss";
import { Container } from "@material-ui/core";
import clsx from "clsx";
import useStyles from "./style";
import Button from "@material-ui/core/Button";

const MainPage = () => {
  const classes = useStyles();

  useEffect(() => {
    document.body.id = "mainPageBody";

    return () => {
      document.body.id = "";
    };
  }, []);

  return (
    <div className="mainPageContainer">
      <div className="header">
        <p className="logo">
          Song<span className="logo2">Hug</span>
        </p>
        <div className="logoDot logoDot1" />
        <div className="logoDot logoDot2" />
      </div>
      <Button className="sendButton">Send SongHug Back!</Button>
    </div>
  );
};

export default MainPage;
