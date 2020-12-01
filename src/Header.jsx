import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { NEW_COLOR } from "./theme";

const useStyles = makeStyles((theme) => ({
  title: {
    color: NEW_COLOR.TEXT,
    fontSize: 50,
    marginTop: 120,
  },
}));

const Header = () => {
  const classes = useStyles();

  return <p className={classes.title}>Make Someone Happy!</p>;
};

export default Header;
