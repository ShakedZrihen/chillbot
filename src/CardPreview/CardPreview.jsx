import React from "react";
import useStyles from "./style";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";

const CardPreview = (props) => {
  const classes = useStyles();

  return (
    <div className={classes.cardContainer}>
      <Card className={classes.card}>
        <CardHeader />
        <Typography variant="h4" className={classes.cardText} component="p">
          Hi Shugi!
        </Typography>
        <CardMedia
          className={classes.media}
          image="https://media1.tenor.com/images/b90f60019962e302bf6fa8478c602aa6/tenor.gif"
        />
        <CardContent>
          <Typography variant="h6" className={classes.cardText} component="p">
            Shaked sent you a song!
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
