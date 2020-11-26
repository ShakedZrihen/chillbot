import React from "react";
import useStyles from "./style";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";

const CardPreview = (props) => {
  const { title, image, musicLink, description, frame } = props;

  const classes = useStyles();

  return (
    <div
      className={classes.cardContainer}
      style={{ borderImage: `url(${frame}) 100 repeat` }}
    >
      <Card className={classes.card}>
        <CardHeader />
        <Typography variant="h4" className={classes.cardText} component="p">
          {title}
        </Typography>
        <CardMedia className={classes.media} image={image} />
        <CardContent>
          <Typography variant="h6" className={classes.cardText} component="p">
            {description}
          </Typography>
          <Typography variant="body2" color="textSecondary">
            Click on the picture for listen to the song!
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
};

export default CardPreview;
