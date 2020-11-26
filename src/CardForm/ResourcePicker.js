import React, { useState } from "react";
import useStyles from "./style.js";
import ToggleButton from "@material-ui/lab/ToggleButton";
import ToggleButtonGroup from "@material-ui/lab/ToggleButtonGroup";
import { Typography } from "@material-ui/core";

// props: title: string, resources: list[string], allowBlank: boolean, select: (id) => void

const ResourcePicker = (props) => {
  const { title, resources, allowBlank } = props;
  const [selected, select] = useState(0);
  const classes = useStyles();

  const handleChange = (event, newSelected) => {
    console.log("select:", newSelected);
    select(newSelected);
  };

  return (
    <div className={classes.backgroundContainer}>
      <Typography>{title}</Typography>
      <ToggleButtonGroup
        value={selected}
        exclusive
        onChange={handleChange}
        aria-label="text alignment"
        className={classes.resourceContainer}
      >
        {allowBlank && (
          <ToggleButton value={0}>
            <div className={classes.image} />
          </ToggleButton>
        )}
        {resources.map((resource, i) => (
          <ToggleButton value={i + +allowBlank}>
            <img src={resource} className={classes.image} />
          </ToggleButton>
        ))}
      </ToggleButtonGroup>
    </div>
  );
};

export default ResourcePicker;
