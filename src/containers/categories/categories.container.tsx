import * as React from "react";
import { ByCategory } from "../filterBy/byCategory";
import { Grid, Box } from "@mui/material";
import { createTheme } from "@mui/material";

export const CategoriesContainer: React.FC = () => {
  return (
    <Grid
      container
      id="categories-grid-container"
      sx={categoriesStyles.container}
    >
      <Box
        id="categories-box"
        sx={{ width: "100%", bgcolor: "background.paper" }}
      >
        <ByCategory />
      </Box>
    </Grid>
  );
};

const theme = createTheme();

const categoriesStyles = {
  container: {
    padding: theme.spacing(3),
  },
};
