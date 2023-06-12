import * as React from "react";
import {
  Grid,
  Container,
  Typography,
  createTheme,
  ButtonBase,
  Box,
  Link,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import { EventsComponent } from "../../components/event/events.component";
import { EventITF } from "../../constants/types";
import { getFutureEvents } from "../../services/main.service";
import { switchRoutes } from "../../components/routing/routes";
import competitors from "../../../public/assets/img/blue.jpg";
import ClubsImg from "../../../public/assets/img/red.jpg";
import events from "../../../public/assets/img/green.jpg";
import umpire from "../../../public/assets/img/yellow.jpg";

const mainPanel = [
  {
    url: competitors,
    title: "Competidores",
    route: switchRoutes.competitors,
    width: "50%",
  },
  {
    url: ClubsImg,
    title: "Clubs",
    route: switchRoutes.clubs,
    width: "50%",
  },
  {
    url: events,
    title: "Eventos",
    route: switchRoutes.events,
    width: "50%",
  },
  {
    url: umpire,
    title: "Árbitros",
    route: switchRoutes.umpires,
    width: "50%",
  },
];

export const MainContainer: React.FC = () => {
  const [events, setEvents] = React.useState<EventITF[]>([]);

  React.useEffect(() => {
    getFutureEvents().then((e: EventITF[]) => {
      setEvents(e);
    });
  }, []);

  return (
    <>
      <Box
        sx={{ display: "flex", flexWrap: "wrap", minWidth: 300, width: "100%" }}
      >
        {mainPanel.map((image) => (
          <ImageButton
            focusRipple
            key={image.title}
            style={{
              width: image.width,
            }}
          >
            <ImageSrc style={{ backgroundImage: `url(${image.url})` }} />
            <ImageBackdrop className="MuiImageBackdrop-root" />
            <Link href={image.route} underline="none">
              <Image>
                <Typography
                  component="span"
                  variant="subtitle1"
                  color="inherit"
                  sx={{
                    position: "relative",
                    p: 4,
                    pt: 2,
                    pb: (theme) => `calc(${theme.spacing(1)} + 6px)`,
                  }}
                >
                  {image.title}
                  <ImageMarked className="MuiImageMarked-root" />
                </Typography>
              </Image>
            </Link>
          </ImageButton>
        ))}
      </Box>
      <Container sx={mainStyles.container}>
        <Typography variant="h3" component="h4" align="center" color="inherit">
          Próximos eventos
        </Typography>
        <Grid container spacing={3}>
          {events.map((e, index) => (
            <Grid item key={`event-${index}`} xs={12} sm={6} md={3}>
              <EventsComponent event={e} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </>
  );
};

const theme = createTheme();

const mainStyles = {
  container: {
    padding: theme.spacing(3),
  },
};

const ImageButton = styled(ButtonBase)(({ theme }) => ({
  position: "relative",
  height: 200,
  [theme.breakpoints.down("sm")]: {
    width: "100% !important", // Overrides inline-style
    height: 100,
  },
  "&:hover, &.Mui-focusVisible": {
    zIndex: 1,
    "& .MuiImageBackdrop-root": {
      opacity: 0.15,
    },
    "& .MuiImageMarked-root": {
      opacity: 0,
    },
    "& .MuiTypography-root": {
      border: "4px solid currentColor",
    },
  },
}));

const ImageSrc = styled("span")({
  position: "absolute",
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  backgroundSize: "cover",
  backgroundPosition: "center 40%",
});

const Image = styled("span")(({ theme }) => ({
  position: "absolute",
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  color: theme.palette.common.white,
}));

const ImageBackdrop = styled("span")(({ theme }) => ({
  position: "absolute",
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  backgroundColor: theme.palette.common.black,
  opacity: 0.4,
  transition: theme.transitions.create("opacity"),
}));

const ImageMarked = styled("span")(({ theme }) => ({
  height: 3,
  width: 18,
  backgroundColor: theme.palette.common.white,
  position: "absolute",
  bottom: -2,
  left: "calc(50% - 9px)",
  transition: theme.transitions.create("opacity"),
}));
