import React, { useEffect } from "react";
import "./MainPage.scss";
import useStyles from "./style";
import Button from "@material-ui/core/Button";
import Logo from "./resources/logo.svg";

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
      <div className="header" />
      <div className="logo" />

      <Button className="sendButton">Send SongHug</Button>
      <div className="love">Spread The Love!</div>
      <div className="heart" />
    </div>
  );
};

export default MainPage;
