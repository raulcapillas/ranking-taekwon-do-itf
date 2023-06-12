import * as React from "react";
import { getClubs } from "../../services/clubs.service";
import { AutoComplete } from "../../constants/interfaces";
import { autoCompleteDefault } from "../../constants/default";
import { FilterByComponent } from "../../components/filterBy/filterBy.component";
import { mappingClubsToAutoComplete } from "../../helpers/mappings";
import { Snackbar } from "@mui/material";
import MuiAlert, { AlertProps } from "@mui/material/Alert";
import { ClubInformationContainer } from "../clubs/clubInformation/club.information";

export const ByClub: React.FC = () => {
  const [autoComplete, setAutoComplete] =
    React.useState<AutoComplete[]>(autoCompleteDefault);
  const [value, setValue] = React.useState<AutoComplete>(
    autoCompleteDefault[0]
  );
  const [info, setInfo] = React.useState<any>(null);
  const [open, setOpen] = React.useState<boolean>(false);

  React.useEffect(() => {
    getClubs().then((c) => {
      setAutoComplete(mappingClubsToAutoComplete(c));
    });
  }, []);

  const handleValue = (value: AutoComplete) => {
    if (value.id != "") {
      setInfo(<ClubInformationContainer id={value.id} name={value.name}/>);
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
          Seleciona un club
        </Alert>
      </Snackbar>
      <FilterByComponent
        filters={autoComplete}
        value={value}
        setValue={setValue}
        handleValue={handleValue}
        handleRemove={handleRemove}
        label="Clubs"
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
