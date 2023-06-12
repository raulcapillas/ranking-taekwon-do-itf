import * as React from "react";
import {
  Box,
  Grid,
  Typography,
  Container,
  Paper,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Avatar,
} from "@mui/material";
import { getClubInformation } from "../../../services/clubs.service";
import { ClubInformation } from "../../../constants/interfaces";
import { useClubStyles } from "./club.information.style";
import { format } from "date-fns";

interface ClubInformationProps {
  id: string;
  name: string;
}

export const ClubInformationContainer: React.FC<ClubInformationProps> = ({
  name,
}) => {
  const classes = useClubStyles;
  const [club, setClub] = React.useState<ClubInformation[]>([]);

  React.useEffect(() => {
    getClubInformation(name).then((ce) => {
      setClub(
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
      <Box sx={classes.marginTop}>
        <Typography variant="h4" color="primary" align="center" gutterBottom>
          {name}
        </Typography>
      </Box>
      <Container maxWidth="xl" sx={classes.container}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6} lg={4}>
            <Paper sx={classes.paper}>
              <Typography
                component="h2"
                variant="h6"
                color="primary"
                gutterBottom
              >
                Competidores/as participantes
              </Typography>
              <Table size="medium">
                <TableHead>
                  <TableRow>
                    <TableCell></TableCell>
                    <TableCell>Nombre</TableCell>
                    <TableCell>Apellidos</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {club
                    .filter(
                      (value, index, self) =>
                        index ===
                        self.findIndex(
                          (c) =>
                            c.competitor_name === value.competitor_name &&
                            c.competitor_lastname === value.competitor_lastname
                        )
                    )
                    .map((row) => (
                      <TableRow key={`competitor-${row.name}`}>
                        <TableCell>
                          <Avatar
                            alt={row.competitor_name}
                            src={row.competitor_photo}
                            sx={{ width: 56, height: 56 }}
                          />
                        </TableCell>
                        <TableCell>{row.competitor_name}</TableCell>
                        <TableCell>{row.competitor_lastname}</TableCell>
                      </TableRow>
                    ))}
                </TableBody>
              </Table>
            </Paper>
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <Paper sx={classes.paper}>
              <Typography
                component="h2"
                variant="h6"
                color="primary"
                gutterBottom
              >
                Categorías participadas
              </Typography>
              <Table size="medium">
                <TableHead>
                  <TableRow>
                    <TableCell>Nombre</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {club
                    .filter(
                      (value, index, self) =>
                        index ===
                        self.findIndex(
                          (c) => c.category_name === value.category_name
                        )
                    )
                    .map((row) => (
                      <TableRow key={`category-${row.name}`}>
                        <TableCell>{row.category_name}</TableCell>
                      </TableRow>
                    ))}
                </TableBody>
              </Table>
            </Paper>
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <Paper sx={classes.paper}>
              <Typography
                component="h2"
                variant="h6"
                color="primary"
                gutterBottom
              >
                Eventos participados
              </Typography>
              <Table size="medium">
                <TableHead>
                  <TableRow>
                    <TableCell>Nombre</TableCell>
                    <TableCell>Tipo</TableCell>
                    <TableCell>Fecha</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {club
                    .filter(
                      (value, index, self) =>
                        index ===
                        self.findIndex(
                          (c) =>
                            c.event_name === value.event_name &&
                            c.event_type === value.event_type
                        )
                    )
                    .map((row) => (
                      <TableRow key={`event-${row.name}`}>
                        <TableCell>{row.event_name}</TableCell>
                        <TableCell>{row.event_type}</TableCell>
                        <TableCell>
                          {format(new Date(row.event_date), "dd-MM-yyyy")}
                        </TableCell>
                      </TableRow>
                    ))}
                </TableBody>
              </Table>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};
