import React, { useEffect, useRef } from "react";
import { useHistory } from "react-router-dom";

import "./MainPage.scss";
import Button from "@material-ui/core/Button";

const MainPage = () => {
  const history = useHistory();

  useEffect(() => {
    document.body.id = "mainPageBody";
    return () => {
      document.body.id = "";
    };
  }, []);

  const handleClick = () => {
    if (localStorage.getItem("currentUser") == null) {
      history.push({
        pathname: "/register",
      });
    } else {
      history.push({
        pathname: "/sendsong",
      });
    }
  };

  return (
    <div className="mainPageContainer">
      <div className="header" />
      <div className="logo" />

      <Button className="sendButton" onClick={handleClick}>
        Send SongHug
      </Button>
      <div className="love">Spread The Love!</div>
      <div className="heart" />
    </div>
  );
};

export default MainPage;
