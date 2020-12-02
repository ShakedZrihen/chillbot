import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import ResourcePicker from "./ResourcePicker";
import GIFs from "../resources/gifs";
import Button from "@material-ui/core/Button";
import buildCard from "../resources/baseCard";
import generateMessage from "../resources/botMessage";
import CircularProgress from "@material-ui/core/CircularProgress";

import clsx from "clsx";
// import { BOT_TOKEN } from "../consts";

import "./style.scss";

const CardForm = () => {
  const [image, setImage] = useState(GIFs[0]);
  const [musicLink, setMusicLink] = useState("");
  const [email, setEmail] = useState("");
  const [description, setDescription] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

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

    if (!image || !email || !musicLink) {
      setError("Some field is missing!");
      setLoading(false);
      return;
    }

    const title = `Hi ${name}!`;
    const card = buildCard(title, image, musicLink, description);
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
    setMusicLink(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  return (
    <div className='cardFromContainer'>
      <div className="flex spaceBetween">
        <div>
          <div className="fieldContainer">
            <label htmlFor="email" className="textboxLabel">
              Send a SongHug for (email)
            </label>
            <TextField
              id="email"
              variant="outlined"
              className="textbox mail"
              value={email}
              onChange={handleEmailChange}
            />
          </div>
          <div className="fieldContainer">
            <label htmlFor="youtubeLink" className="textboxLabel">
              Paste YouTube Link here
            </label>
            <TextField
              id="youtube"
              variant="outlined"
              className="textbox"
              multiline
              rows={1}
              value={musicLink}
              onChange={handleYoutubeLinkChange}
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
