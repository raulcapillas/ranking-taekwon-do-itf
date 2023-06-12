import { createTheme } from "@mui/material";

const theme = createTheme();

export const useClubStyles = {
  marginTop: {
    marginTop: theme.spacing(5),
  },
  table: {
    minWidth: 700,
  },
  visuallyHidden: {
    border: 0,
    clip: "rect(0 0 0 0)",
    height: 1,
    margin: -1,
    overflow: "hidden",
    padding: 0,
    position: "absolute",
    top: 20,
    width: 1,
  },
  size: {
    fontSize: "2.5rem",
  },
  card: {
    display: "flex",
  },
  cardDetails: {
    flex: 1,
  },
  cardMedia: {
    width: 160,
  },
  fex: {
    display: "flex",
    justifyContent: "center",
  },
  seeMore: {
    marginTop: theme.spacing(1),
  },
  paper: {
    padding: theme.spacing(1),
    display: "flex",
    overflow: "auto",
    flexDirection: "column",
  },
  container: {
    paddingTop: theme.spacing(1),
    paddingBottom: theme.spacing(1),
  },
};
