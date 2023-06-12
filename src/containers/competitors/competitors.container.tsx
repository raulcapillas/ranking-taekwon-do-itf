import * as React from "react";
import { Grid } from "@mui/material";
import { ByCompetitor } from "../filterBy/byCompetitor";
import { createTheme } from "@mui/material";

export const CompetitorsContainer: React.FC = () => {
  return (
    <Grid
      container
      id="competitors-grid-container"
      sx={competitorsStyles.container}
    >
      <ByCompetitor />
    </Grid>
  );
};

const theme = createTheme();

const competitorsStyles = {
  container: {
    padding: theme.spacing(3),
  },
};
