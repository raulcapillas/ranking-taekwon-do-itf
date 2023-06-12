import * as React from "react";
import { CategoryEvents } from "../../../constants/interfaces";
import { categoryEventsDefault } from "../../../constants/default";
import { getCategoryEvents } from "../../../services/categories.service";
import { CategoryTable } from "./category.table";
import { CategoryPodiumContainer } from "./category.podium";
import { Box, createTheme, Typography } from "@mui/material";

interface CatergoryInformationProps {
  id: string;
  name: string;
}

export const CategoryInformationContainer: React.FC<
  CatergoryInformationProps
> = ({ id, name }) => {
  const [categoryEvents, setCategoryEvents] = React.useState<CategoryEvents[]>(
    categoryEventsDefault
  );

  React.useEffect(() => {
    getCategoryEvents(id).then((ce) => {
      setCategoryEvents(
        ce
          .sort((a, b) => (b.total < a.total ? -1 : b.total > a.total ? 1 : 0))
          .map((c, index) => ({
            ...c,
            id: index + 1,
            position: index + 1,
          }))
      );
    });
  }, []);

  return (
    <>
      <Box sx={styles.marginTop}>
        <Typography variant="h4" color="primary" align="center" gutterBottom>
          Participantes de la categoría ({name})
        </Typography>
      </Box>
      <Box sx={styles.marginTop}>
        <CategoryPodiumContainer podium={categoryEvents.slice(0, 3)} />
      </Box>
      <Box sx={styles.marginTop}>
        <CategoryTable rows={categoryEvents} />
      </Box>
    </>
  );
};

const theme = createTheme();

const styles = {
  marginTop: {
    marginTop: theme.spacing(6),
  },
};
