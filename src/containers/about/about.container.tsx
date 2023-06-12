import * as React from "react";
import { Box, Grid, Link, Paper, Typography } from "@mui/material";
import { aboutStyles } from "./about.style";

const about = {
  name: "Ranking oficial de la TAEKWON-DO ITF ESPAÑA",
  date: "30/10/2022",
  version: "2.0.1",
  background_image:
    "https://www.taekwondoitf.es/wp-content/uploads/2015/04/main-slider-1-2.jpg",
  this: "Esta web es un proyecto voluntario acerca del Ranking de la TAEKWON-DO ITF ESPAÑA hecho por Raúl Capillas",
};

export const AboutContainer: React.FC = () => {
  const classes = aboutStyles;

  return (
    <>
      <Grid container>
        <Grid item xs={11} xl={11} sx={classes.item}>
          <Paper
            sx={classes.mainFeaturedPost}
            style={{ backgroundImage: `url(${about.background_image})` }}
          >
            <Box sx={classes.overlay} />
            <Grid container>
              <Grid item md={10}>
                <Box sx={classes.mainFeaturedPostContent}>
                  <Typography
                    component="h1"
                    variant="h3"
                    color="inherit"
                    gutterBottom
                  >
                    {about.name}
                  </Typography>
                  <Typography variant="h6" gutterBottom>
                    {`Última actualización:  ${about.date}`}
                  </Typography>
                  <Typography variant="h6" gutterBottom>
                    {`Versión:  ${about.version}`}
                  </Typography>
                  <Typography variant="body2" gutterBottom>
                    {about.this}
                  </Typography>
                </Box>
              </Grid>
            </Grid>
          </Paper>
        </Grid>
      </Grid>
    </>
  );
};
