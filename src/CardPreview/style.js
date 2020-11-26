import { makeStyles } from "@material-ui/core/styles";
import { COLORS } from "../theme";

export default makeStyles((theme) => ({
  card: {
    minWidth: 400,
    minHeight: 620,
    textAlign: "center",
  },
  cardText: {
    color: COLORS.PRIMERY,
    maxWidth: 370,
    wordBreak: "break-all",
    whiteSpace: "pre-wrap",
    margin: "0 auto",
  },
  cardContainer: {
    border: "15px solid transparent",
  },
  media: {
    width: 300,
    height: 300,
    margin: "60px auto 18px auto",
    backgroundSize: "contain",
  },
}));
