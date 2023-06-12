import * as React from "react";
import { Box, createTheme, Typography } from "@mui/material";
import { getEventInformation } from "../../../services/events.service";
import { DataGrid } from "@mui/x-data-grid";
import { TournamentsColumns } from "../../../constants/event.constant";
import { EventInformation } from "../../../constants/interfaces";

interface EventInformationProps {
  name: string;
  title: string;
}

export const EventInformationContainer: React.FC<EventInformationProps> = ({
  name,
  title,
}) => {
  const [eventInfo, setEventInfo] = React.useState<EventInformation[]>([]);

  React.useEffect(() => {
    getEventInformation(name).then((event) => {
      setEventInfo(
        event
          .filter((e) => e.competitor_rank > 0)
          .sort((a, b) =>
            b.competitor_rank > a.competitor_rank
              ? -1
              : b.competitor_rank < a.competitor_rank
              ? 1
              : 0
          )
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
        rows={eventInfo}
        columns={TournamentsColumns}
        pageSize={50}
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
