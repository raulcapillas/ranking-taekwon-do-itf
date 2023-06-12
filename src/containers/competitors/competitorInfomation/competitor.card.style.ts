import { createTheme } from "@mui/material";

const theme = createTheme();

export const CompetitorCardStyles = {
  card: {
    display: "flex",
    minWidth: 275,
    minHeight: 200,
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
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2),
  },
  total: {
    marginTop: theme.spacing(2),
  }
};
