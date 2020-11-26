import { makeStyles } from "@material-ui/core/styles";

const COLORS = {
  PRIMERY: "#428C7F",
  SECONDARY: "#2A3858",
  OFFWHITE: "#F2F2F2",
};

const useStyles = makeStyles((theme) => ({
  title: {
    color: COLORS.PRIMERY,
  },
  textbox: {
    width: "415px",
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
    overflowY: 'auto',
    height: 130
  },
}));

export default useStyles;
