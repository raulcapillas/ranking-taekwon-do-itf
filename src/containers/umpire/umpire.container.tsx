import * as React from "react";
import { Box, Grid, Paper, LinearProgress } from "@mui/material";
import { UmpireStyles } from "./umpire.style";
import { CollapsibleTableComponent } from "../../components/table/collapsibleTable.component";
import { getUmpire, getUmpireEvents } from "../../services";
import { Umpire, UmpireEvents, umpireEventsDefault } from "../../constants";

export const UmpireContainer: React.FC = () => {
  const [umpire, setUmpire] = React.useState<Umpire[]>([]);
  const [umpireEvents, setUmpireEvents] =
    React.useState<UmpireEvents>(umpireEventsDefault);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    getUmpire().then((umpires) => {
      setUmpire(
        umpires.sort((a, b) =>
          b.total < a.total ? -1 : b.total < a.total ? 1 : 0
        )
      );
      setLoading(false);
    });
  }, []);

  React.useEffect(() => {
    getUmpireEvents().then((ue: UmpireEvents[]) => {
      setUmpireEvents(ue[0]);
    });
  }, []);

  return (
    <>
      <Grid container sx={UmpireStyles.container}>
        <Grid item xs={11} xl={11} sx={UmpireStyles.item}>
          <Paper elevation={1}>
            {loading ? (
              <Box sx={{ width: "100%" }}>
                <LinearProgress />
              </Box>
            ) : (
              <CollapsibleTableComponent
                umpires={umpire}
                umpire_events={umpireEvents}
              />
            )}
          </Paper>
        </Grid>
      </Grid>
    </>
  );
};
