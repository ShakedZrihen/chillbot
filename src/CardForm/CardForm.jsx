import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import ResourcePicker from "./ResourcePicker";
import GIFs from "../resources/gifs";
import Button from "@material-ui/core/Button";
import buildCard from "../resources/baseCard";
import generateMessage from "../resources/botMessage";
import CircularProgress from "@material-ui/core/CircularProgress";
import { VALIDATION_ERRORS, VALIDATION_PASSED } from "./consts";
import clsx from "clsx";
import { BOT_TOKEN, HOST } from "../consts";

import "./style.scss";

const CardForm = (props) => {
  const [image, setImage] = useState(GIFs[0]);
  const [musicLink, setMusicLink] = useState("");
  const [email, setEmail] = useState(props.email);
  const [description, setDescription] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [currentUser] = useState(localStorage.getItem("currentItem"));

  const [emailError, setEmailErrorMsg] = useState(VALIDATION_PASSED);
  const isEmailError = emailError !== VALIDATION_PASSED;
  const [youtubeError, setYoutubeErrorMsg] = useState(VALIDATION_PASSED);
  const isYoutubeError = youtubeError !== VALIDATION_PASSED;

  const handleSend = async () => {
    setLoading(true);
    const name = await fetch(`https://webexapis.com/v1/people?email=${email}`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${BOT_TOKEN}`,
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((res) => res.items[0].nickName)
      .catch(() => email);

    const sender = await fetch(
      `https://webexapis.com/v1/people?email=${currentUser}`,
      {
        method: "GET",
        headers: {
          Authorization: `Bearer ${BOT_TOKEN}`,
          "Content-Type": "application/json",
        },
      }
    )
      .then((res) => res.json())
      .then((res) => res.items[0].nickName)
      .catch(() => currentUser);

    if (!image || !email || !musicLink) {
      setError("Some field is missing!");
      setLoading(false);
      return;
    }

    const formattedLink =
      HOST +
      `/songHug?receiver=${email}&displayLink=${musicLink}&sender=${sender}&senderMail=${currentUser}`;
    console.log("formattedLink", formattedLink);
    const title = `Hi ${name}!`;
    const card = buildCard(title, image, formattedLink, description);
    const message = generateMessage(card, email);

    fetch("https://webexapis.com/v1/messages", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${BOT_TOKEN}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(message),
    })
      .catch((e) => console.log(e))
      .then(() => setLoading(false));
  };

  const handleDescriptionChane = (event) => {
    const newDescription = event.target.value;
    if (newDescription.length <= 65) {
      setDescription(newDescription);
    }
  };

  const handleYoutubeLinkChange = (event) => {
    const musicLink = event.target.value;
    setMusicLink(musicLink);

    if (musicLink && musicLink.trim().length > 0) {
      if (musicLink.indexOf("youtube.com/watch") <= 0) {
        setYoutubeErrorMsg(VALIDATION_ERRORS.YOUTUBE.NOT_VALID);
        return false;
      }
      setYoutubeErrorMsg(VALIDATION_PASSED);
      return true;
    }

    setYoutubeErrorMsg(VALIDATION_ERRORS.YOUTUBE.EMPTY);
    return false;
  };

  const handleEmailChange = (event) => {
    const emailValue = event.target.value;
    setEmail(emailValue);

    if (emailValue && emailValue.trim().length > 0) {
      if (emailValue.indexOf("cisco.com") <= 0) {
        setEmailErrorMsg(VALIDATION_ERRORS.EMAIL.NOT_VALID);
        return false;
      }
      setEmailErrorMsg(VALIDATION_PASSED);
      return true;
    }

    setEmailErrorMsg(VALIDATION_ERRORS.EMAIL.EMPTY);
    return false;
  };

  return (
    <div className="cardFromContainer">
      <div className="flex spaceBetween">
        <div>
          <div className="fieldContainer">
            <label htmlFor="email" className="textboxLabel">
              Send a SongHug for (email)
            </label>
            <TextField
              id="outlined-error-helper-text"
              variant="outlined"
              className={`textbox email ${isEmailError ? "error" : ""}`}
              value={email}
              onChange={handleEmailChange}
              helperText={emailError}
              error={isEmailError}
            />
          </div>
          <div className="fieldContainer">
            <label htmlFor="youtubeLink" className="textboxLabel">
              Paste YouTube Link here
            </label>
            <TextField
              id="outlined-error-helper-text"
              variant="outlined"
              className={`textbox ${isYoutubeError ? "error" : ""}`}
              multiline
              rows={1}
              value={musicLink}
              onChange={handleYoutubeLinkChange}
              helperText={youtubeError}
              error={isYoutubeError}
            />
          </div>
          <div className="fieldContainer">
            <label htmlFor="message" className="textboxLabel">
              Add Message
            </label>
            <TextField
              multiline
              id="dscription"
              variant="outlined"
              className="textbox"
              value={description}
              onChange={handleDescriptionChane}
              rows={4}
            />
          </div>
        </div>

        <div className="resourcePickerContainer">
          <ResourcePicker
            title="Choose a GIF"
            resources={GIFs}
            allowBlank={false}
            value={image}
            setValue={setImage}
          />
        </div>
      </div>

      {loading ? (
        <CircularProgress disableShrink className="spinner" />
      ) : (
        <Button className={clsx("sendButton")} onClick={handleSend}>
          Send SongHug
        </Button>
      )}
    </div>
  );
};

export default CardForm;
