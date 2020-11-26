import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { Container } from "@material-ui/core";
import SlowMotionVideoIcon from "@material-ui/icons/SlowMotionVideo";

const useStyles = makeStyles((theme) => ({
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    color: "#2A3858",
  },
  flex: {
    display: "flex",
    flexFlow: "row",
  },
  icon: {
    marginTop: 5,
    marginLeft: 59,
    position: "absolute",
  },
  albumIcon: {
    marginTop: 7,
    marginLeft: 87,
    position: "absolute",
    color: "#2A3858",
    fontSize: '2em'
  },
  t: {
    marginLeft: 23,
  },
  subtitle: {
    position: "relative",
    bottom: 4,
  },
}));

const Header = () => {
  const classes = useStyles();

  return (
    <AppBar position="static">
      <Toolbar>
        <Container className={classes.container} maxWidth="md">
          <div className={`${classes.flex} ${classes.title}`}>
            <Typography variant="h4">ChillB</Typography>
            <Typography variant="h4" className={classes.t}>T</Typography>
            <SlowMotionVideoIcon className={classes.albumIcon} />
          </div>
          <Typography variant="subtitle2" className={classes.subtitle}>
            send a designed song to someone you like
          </Typography>
        </Container>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
