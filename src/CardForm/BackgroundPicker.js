import React from "react";
import useStyles from "./style.js";
import ToggleButton from "@material-ui/lab/ToggleButton";
import ToggleButtonGroup from "@material-ui/lab/ToggleButtonGroup";
import { Typography } from "@material-ui/core";

const BackgroundPicker = () => {
  const classes = useStyles();

  return (
    <div className={classes.backgroundContainer}>
      <Typography>Choose a Frame</Typography>
      <ToggleButtonGroup>
        <ToggleButton>
          <img
            src="https://www.kudoboard.com/images/chevrons-background.png"
            alt="img"
            className={classes.image}
          />
        </ToggleButton>
        <ToggleButton>
          <img
            src="https://s3.amazonaws.com/kudoboard-assets/templates/168/backgrounds/lowres/KFjAqE0i.jpg"
            alt="img"
            className={classes.image}
          />
        </ToggleButton>
        <ToggleButton>
          <img
            src="https://www.kudoboard.com/images/lines-background.png"
            alt="img"
            className={classes.image}
          />
        </ToggleButton>
        <ToggleButton>
          <div className={classes.image} />
        </ToggleButton>
      </ToggleButtonGroup>
    </div>
  );
};

export default BackgroundPicker;
