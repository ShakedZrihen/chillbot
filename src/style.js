import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  title: {
    flexGrow: 1,
    color: "#2A3858",
  },
  container: {
    margin: "3% auto",
  },
  multilineColor: {
    color: "#2A3858",
  },
  card: {
    minWidth: 400,
    minHeight: 620,
    textAlign: "center",
  },
  contentContainer: {
    display: "flex",
    flexFlow: "row",
    justifyContent: "space-between",
  },
  cardContainer: {},
  media: {
    height: 400,
    width: 400,
  },
  cardText: {
    color: "#428C7F",
  },
  cardContainer: {
    border: "15px solid transparent",
    borderImage:
      "url(https://www.kudoboard.com/images/lines-background.png) 100 repeat",
  },
  sendButton: {
    margin: '16px auto',
    width: 600
  },
}));
