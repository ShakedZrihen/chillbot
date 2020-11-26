import React from "react";
import useStyles from "./style.js";
import ToggleButton from "@material-ui/lab/ToggleButton";
import ToggleButtonGroup from "@material-ui/lab/ToggleButtonGroup";
import { Typography } from "@material-ui/core";

const GifPicker = () => {
  const classes = useStyles();

  return (
    <div className={classes.backgroundContainer}>
      <Typography>Choose a GIF</Typography>
      <ToggleButtonGroup>
        <ToggleButton>
          <img
            src="https://media1.tenor.com/images/b90f60019962e302bf6fa8478c602aa6/tenor.gif"
            alt="img"
            className={classes.image}
          />
        </ToggleButton>
        <ToggleButton>
          <img
            src="https://i.pinimg.com/originals/e7/ab/1e/e7ab1ede1eea99b1de9a8f6eaf0582a9.gif"
            alt="img"
            className={classes.image}
          />
        </ToggleButton>
        <ToggleButton>
          <img
            src="https://i.pinimg.com/originals/59/a5/f0/59a5f025e75fe29104bd9597f5f7b0f1.gif"
            alt="img"
            className={classes.image}
          />
        </ToggleButton>
        <ToggleButton>
        <img
            src="https://m.media-amazon.com/images/G/01/digital/music/player/web/equalizer_accent.gif"
            alt="img"
            className={classes.image}
          />
        </ToggleButton>
      </ToggleButtonGroup>
    </div>
  );
};

export default GifPicker;
