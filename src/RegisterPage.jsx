import React, { useEffect, useState } from "react";
import Header from "./Header";
import { Container } from "@material-ui/core";
import useStyles from "./style";
import clsx from "clsx";
import "./RegisterPage.scss";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { useHistory } from "react-router-dom";

const RegisterPage = () => {
  const classes = useStyles();
  const [email, setEmail] = useState("");
  const history = useHistory();

  useEffect(() => {
    document.body.id = "sendSongBody";

    return () => {
      document.body.id = "";
    };
  }, []);

  const handleContinue = (event) => {
    localStorage.setItem("currentUser", event.target.value);
    history.push({
      pathname: "/sendsong",
    });
  };

  return (
    <div className="registerContainer">
      <Container
        className={clsx(classes.container, "sendSongHugContainer")}
        maxWidth="xl"
      >
        <Header title={"Nice to Meet ya!"} />
        <p className="subtitle">
          Before we start let’s get to know you a little bit
        </p>
        <div className="fieldContainer">
          <label htmlFor="email" className="textboxLabel">
            what is your cisco mail?
          </label>
          <TextField
            id="outlined-error-helper-text"
            variant="outlined"
            className={`textbox email`}
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
        </div>
        <Button className={clsx("sendButton")} onClick={handleContinue}>
          Continue
        </Button>
      </Container>
    </div>
  );
};

export default RegisterPage;
