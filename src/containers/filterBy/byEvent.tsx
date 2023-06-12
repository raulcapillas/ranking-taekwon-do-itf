import * as React from "react";
import { getEvents } from "../../services/events.service";
import { AutoComplete } from "../../constants/interfaces";
import { autoCompleteDefault } from "../../constants/default";
import { FilterByComponent } from "../../components/filterBy/filterBy.component";
import { mappingEventsToAutoComplete } from "../../helpers/mappings";
import { Box, createTheme, Snackbar, Typography } from "@mui/material";
import MuiAlert, { AlertProps } from "@mui/material/Alert";
import { EventInformationContainer } from "../events/eventInformation/event.information";
import { EventClubContainer } from "../events/eventClub/event.club";

export const ByEvent: React.FC = () => {
  const [autoComplete, setAutoComplete] =
    React.useState<AutoComplete[]>(autoCompleteDefault);
  const [value, setValue] = React.useState<AutoComplete>(
    autoCompleteDefault[0]
  );
  const [info, setInfo] = React.useState<any>(null);
  const [open, setOpen] = React.useState<boolean>(false);

  React.useEffect(() => {
    getEvents().then((e) => {
      setAutoComplete(mappingEventsToAutoComplete(e));
    });
  }, []);

  const handleValue = (value: AutoComplete) => {
    if (value.id != "") {
      setInfo(
        <>
          <Box sx={styles.marginTop}>
            <Typography
              variant="h4"
              color="primary"
              align="center"
              gutterBottom
            >
              {value.name}
            </Typography>
          </Box>
          <EventClubContainer
            name={value.name}
            title={`Ranking por clubs`}
          ></EventClubContainer>
          <EventInformationContainer
            name={value.name}
            title={`Ranking por competidor`}
          />
        </>
      );
      return;
    }

    setOpen(true);
  };

  const handleClose = (
    event?: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  const handleRemove = () => {
    setInfo(null);
  };

  return (
    <>
      <Snackbar
        open={open}
        autoHideDuration={3000}
        onClose={handleClose}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
      >
        <Alert onClose={handleClose} severity="warning" sx={{ width: "100%" }}>
          Seleciona un evento
        </Alert>
      </Snackbar>
      <FilterByComponent
        filters={autoComplete}
        value={value}
        setValue={setValue}
        handleValue={handleValue}
        handleRemove={handleRemove}
        label="Eventos"
      />
      {info}
    </>
  );
};

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(
  props,
  ref
) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const theme = createTheme();

const styles = {
  marginTop: {
    marginTop: theme.spacing(6),
  },
};
