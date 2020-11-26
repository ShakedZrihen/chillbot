import React from "react";
import TextField from "@material-ui/core/TextField";
import useStyles from "./style.js";
import ResourcePicker from "./ResourcePicker";
import AccountCircle from "@material-ui/icons/AccountCircle";
import InputAdornment from "@material-ui/core/InputAdornment";

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

  const classes = useStyles();

  const handleDescriptionChane = (event) => {
    const newDescription = event.target.value;
    if (newDescription.length <= 65) {
      setDescription(newDescription);
    }
  };

  const handleTitleChane = (event) => {
    const newTitle = event.target.value;
    if (newTitle.length <= 25) {
      setTitle(newTitle);
    }
  };

  return (
    <div className={classes.flex}>
      <div className={classes.mailContainer}>
        <TextField
          required
          id="email-required"
          placeholder="send to"
          className={classes.mailTextbox}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <AccountCircle />
              </InputAdornment>
            ),
          }}
        />
        <TextField
          disabled
          id="email"
          value="@cisco.com"
          className={classes.mailTextbox}
        />
      </div>

      <TextField
        id="title"
        className={classes.textbox}
        color="secondary"
        label="Enter some short title to the card"
        value={title}
        onChange={handleTitleChane}
      />
      <TextField
        id="standard-multiline-static"
        placeholder="Add a personal message"
        multiline
        variant="outlined"
        rows={4}
        className={`${classes.textbox} ${classes.multiTextBox}`}
        color="secondary"
        value={description}
        onChange={handleDescriptionChane}
      />
      <ResourcePicker
        title="Choose a Frame"
        resources={frames}
        allowBlank={true}
        value={frame}
        setValue={setFrame}
      />
      <TextField
        required
        rowsMax={2}
        multiline={true}
        id="email-required"
        className={classes.textbox}
        color="secondary"
        label="Enter youtube link"
      />
      <ResourcePicker
        title="Choose a GIF"
        resources={gifs}
        allowBlank={false}
        value={image}
        setValue={setImage}
      />
    </div>
  );
};

export default CardForm;
