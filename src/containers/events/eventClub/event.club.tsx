import * as React from "react";
import { Box, createTheme, Typography } from "@mui/material";
import { getEventClubs } from "../../../services/events.service";
import { DataGrid } from "@mui/x-data-grid";
import { EventClubColumns } from "../../../constants/event.constant";
import { EventClub } from "../../../constants/interfaces";

interface EventClubProps {
  name: string;
  title: string;
}

export const EventClubContainer: React.FC<EventClubProps> = ({ name, title }) => {
  const [eventClub, setEventClub] = React.useState<EventClub[]>([]);

  React.useEffect(() => {
    getEventClubs(name).then((ec) => {
      setEventClub(
        ec
          .sort((a, b) => (b.rank > a.rank ? -1 : b.rank < a.rank ? 1 : 0))
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
        <Typography variant="h5" color="secondary" align="center" gutterBottom>
          {title}
        </Typography>
      </Box>
      <DataGrid
        rows={eventClub}
        columns={EventClubColumns}
        pageSize={15}
        rowsPerPageOptions={[5]}
        autoHeight
        disableColumnMenu
        disableColumnFilter
        disableColumnSelector
        sx={{
          ".MuiDataGrid-columnSeparator": {
            display: "none",
          },
        }}
      />
    </>
  );
};

const theme = createTheme();

const styles = {
  marginTop: {
    marginTop: theme.spacing(6),
  },
};
