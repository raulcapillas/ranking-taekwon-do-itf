import * as React from "react";
import {
  Avatar,
  Box,
  Card,
  CardContent,
  CardHeader,
  Container,
  createTheme,
  Grid,
  List,
  ListItem,
  ListItemText,
  Skeleton,
  TextField,
} from "@mui/material";
import { CategoryEvents } from "../../../constants/interfaces";
import LooksOneOutlinedIcon from "@mui/icons-material/LooksOneOutlined";
import LooksTwoOutlinedIcon from "@mui/icons-material/LooksTwoOutlined";
import Looks3OutlinedIcon from "@mui/icons-material/Looks3Outlined";

export interface podium {
  podium: CategoryEvents[];
}

export const CategoryPodiumContainer: React.FunctionComponent<podium> = (
  props: podium
) => {
  const { podium } = props;
  const classes = usePodiumStyles;

  return (
    <>
      <Container maxWidth="md" component="main" sx={classes.separator}>
        <Grid container spacing={5} alignItems="flex-end">
          {podium.map((p, index) => (
            <Grid item key={index + 1} xs={12} md={4}>
              <Card>
                <CardHeader
                  title={
                    index + 1 === 1 ? (
                      <LooksOneOutlinedIcon
                        sx={{ fontSize: 60, color: "#F6D100" }}
                      />
                    ) : index + 1 === 2 ? (
                      <LooksTwoOutlinedIcon
                        sx={{ fontSize: 45, color: "#BBBBBA" }}
                      />
                    ) : (
                      <Looks3OutlinedIcon
                        sx={{ fontSize: 30, color: "#C77D31" }}
                      />
                    )
                  }
                  titleTypographyProps={{ align: "center" }}
                  sx={
                    index + 1 === 1
                      ? classes.cardHeader1
                      : index + 1 === 2
                      ? classes.cardHeader2
                      : classes.cardHeader3
                  }
                />
                <CardContent>
                  <Box sx={classes.cardPricing}>
                    {p.photo ? (
                      <Avatar
                        alt={p.competitor_name}
                        src={p.photo}
                        variant="rounded"
                        sx={classes.large}
                      />
                    ) : (
                      <Skeleton variant="rectangular" width={60} height={60} />
                    )}
                  </Box>
                  <List dense={true}>
                    <ListItem>
                      <ListItemText
                        primary={p.competitor_name}
                        secondary={p.competitor_lastname}
                      />
                    </ListItem>
                    <ListItem>
                      <ListItemText
                        secondary={
                          <TextField
                            id="outlined-read-only-input"
                            label="Puntos totales"
                            size="small"
                            focused
                            defaultValue={p.total}
                            value={p.total}
                            InputProps={{
                              readOnly: true,
                            }}
                          />
                        }
                      />
                    </ListItem>
                  </List>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </>
  );
};

const theme = createTheme();

const usePodiumStyles = {
  cardHeader1: {
    backgroundColor: theme.palette.grey[200],
  },
  cardHeader2: {
    backgroundColor: theme.palette.grey[100],
  },
  cardHeader3: {
    backgroundColor: theme.palette.grey[50],
  },
  cardPricing: {
    display: "flex",
    justifyContent: "center",
    alignItems: "baseline",
    marginBottom: theme.spacing(2),
  },
  separator: {
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2),
  },
  large: {
    width: theme.spacing(16),
    height: theme.spacing(16),
  },
  size: {
    fontSize: "3.5rem",
  },
};
