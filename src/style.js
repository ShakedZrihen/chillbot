import { makeStyles } from "@material-ui/core/styles";
import { COLORS } from "./theme";

export default makeStyles((theme) => ({
  pageTitle: {
    color: COLORS.PRIMERY,
    margin: '20px auto',
    textAlign: "center",
  },
  title: {
    flexGrow: 1,
    color: COLORS.SECONDARY,
  },
  container: {
    margin: "3% auto",
  },
  multilineColor: {
    color: COLORS.SECONDARY,
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
    color: COLORS.PRIMERY,
  },
  cardContainer: {
    border: "15px solid transparent",
    borderImage:
      "url(https://www.kudoboard.com/images/lines-background.png) 100 repeat",
  },
  sendButton: {
    margin: "16px auto",
    width: "100%",
    backgroundColor: COLORS.PRIMERY,
    color: COLORS.OFFWHITE,
    "&:hover": {
      backgroundColor: COLORS.PRIMARY_SHADE,
      color: COLORS.OFFWHITE,
    },
  },
}));
