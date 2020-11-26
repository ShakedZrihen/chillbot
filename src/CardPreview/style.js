import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  card: {
    minWidth: 400,
    minHeight: 620,
    textAlign: "center",
  },
  cardText: {
    color: "#428C7F",
  },
  cardContainer: {
    border: "15px solid transparent",
    borderImage:
      "url(https://www.kudoboard.com/images/lines-background.png) 100 repeat",
  },
   media: {
    height: 400,
    width: 400,
  },
}));
