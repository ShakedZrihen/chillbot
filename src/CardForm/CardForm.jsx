import React from "react";
import TextField from "@material-ui/core/TextField";
import useStyles from "./style.js";
import Typography from "@material-ui/core/Typography";
import ResourcePicker from "./ResourcePicker";
import GIFs from "../resources/gifs";
import Frames from "../resources/frames";

const CardForm = () => {
  const classes = useStyles();

  return (
    <div className={classes.flex}>
      <Typography variant="h4" className={classes.title}>
        Some title!
      </Typography>
      <TextField
        required
        id="email-required"
        className={classes.textbox}
        color="secondary"
        label="Who do you want to surprise"
      />
      <TextField
        id="standard-multiline-static"
        placeholder="Add a personal message"
        multiline
        variant="outlined"
        rows={4}
        className={`${classes.textbox} ${classes.multiTextBox}`}
        color="secondary"
      />
      <ResourcePicker
        title="Choose a Frame"
        resources={Frames}
        allowBlank={true}
      />
      <TextField
        required
        id="email-required"
        className={classes.textbox}
        color="secondary"
        label="Enter youtube link"
      />
      <ResourcePicker
        title="Choose a GIF"
        resources={GIFs}
        allowBlank={false}
      />

    </div>
  );
};

export default CardForm;
