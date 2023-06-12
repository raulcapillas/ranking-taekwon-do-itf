import * as React from "react";
import { List, ListItem, ListItemText, Grid, Box } from "@mui/material";
import { createTheme } from "@mui/material";
import { ByClub } from "../filterBy/ByClub";

export const ClubsContainer: React.FC = () => {
  return (
    <>
      <Grid container id="clubs-grid-container" sx={clubsStyles.container}>
        <Box id="clubs-box" sx={{ width: "100%", bgcolor: "background.paper" }}>
          <ByClub />
        </Box>
      </Grid>
      {/* <List dense>
        <ListItem>
          <ListItemText
            primary={`
        Seleccionamos el club y aparecerá una tabla con: 
          - Nombre evento
          - Tipo evento
          - Fecha evento
          - Número de participantes
          - # de oros
          - # de platas
          - # de bronces
        Otra tabla con competidores:
          - Foto
          - Nombre
          - Apellidos
        Otra tabla con el nombre de las categorías participadas:
          - Nombre
        `}
          />
        </ListItem>
      </List> */}
    </>
  );
};

const theme = createTheme();

const clubsStyles = {
  container: {
    padding: theme.spacing(3),
  },
};
