import * as React from "react";
import { Grid, Box } from "@mui/material";
import { createTheme } from "@mui/material";
import { ByEvent } from "../filterBy/ByEvent";

export const EventsContainer: React.FC = () => {
  return (
    <>
      <Grid container id="clubs-grid-container" sx={eventStyles.container}>
        <Box id="clubs-box" sx={{ width: "100%", bgcolor: "background.paper" }}>
          <ByEvent />
        </Box>
      </Grid>
      {/* <List dense>
        <ListItem>
          <ListItemText
            primary={`
                · Competidor y competidora con más puntos. Mostrar cuantos oros, platas y bronces.
                · Mejor competidor y competidora de sparring
                · Mejor competidor y competidora de tuls
                · Gráfico del mejor club. Mostrar cuantos oros, platas y bronces.
                · Mostrar gráfico con # total de participantes en cada evento
              `}
          />
        </ListItem>
      </List> */}
    </>
  );
};

const theme = createTheme();

const eventStyles = {
  container: {
    padding: theme.spacing(3),
  },
};
