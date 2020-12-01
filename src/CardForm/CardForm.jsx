import React from "react";
import TextField from "@material-ui/core/TextField";
import ResourcePicker from "./ResourcePicker";
import "./style.scss";

const CardForm = (props) => {
  const {
    title,
    image,
    musicLink,
    description,
    frame,
    gifs,
    frames,
    setTitle,
    setImage,
    setMusicLink,
    setDescription,
    setFrame,
  } = props;

  const handleDescriptionChane = (event) => {
    const newDescription = event.target.value;
    if (newDescription.length <= 65) {
      setDescription(newDescription);
    }
  };

  return (
    <div>
      <div className="flex spaceBetween">
        <div>
          <div className="fieldContainer">
            <label htmlFor="email" className="textboxLabel">
              Send a SongHug for
            </label>
            <TextField id="email" variant="outlined" className="textbox mail" />
          </div>
          <div className="fieldContainer">
            <label htmlFor="youtubeLink" className="textboxLabel">
              Past YouTube Link here
            </label>
            <TextField
              id="youtube"
              variant="outlined"
              className="textbox"
              multiline
              rows={1}
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
            resources={gifs}
            allowBlank={false}
            value={image}
            setValue={setImage}
          />
        </div>
      </div>
      <button className="sendButton">Send SongHug</button>
    </div>
  );
};

export default CardForm;
