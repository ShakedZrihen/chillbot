import { makeStyles } from "@material-ui/core/styles";
import { COLORS } from "../theme";

const useStyles = makeStyles((theme) => ({
  textbox: {
    width: 415,
    marginTop: 20,
  },
  flex: {
    display: "flex",
    flexFlow: "column",
  },
  image: {
    width: 80,
    height: 80,
  },
  mailTextbox: {
    width: 207,
    marginTop: 20,
    marginRight: 2
  },
  mailContainer: {
    display: "flex",
    flexFlow: "row",
  },
  backgroundContainer: {
    marginTop: 16,
    display: "flex",
    flexFlow: "column",
    color: COLORS.SECONDARY,
  },
  backgroundTitle: {
    fontWeight: "200",
  },
  multiTextBox: {
    backgroundColor: "rgba(255,255,255,0.5)",
  },
  resourceContainer: {
    display: "inline-block !important",
    width: 430,
    overflowY: "auto",
    height: 130,
  },
}));

export default useStyles;
