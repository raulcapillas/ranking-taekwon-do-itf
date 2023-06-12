import * as React from "react";
import { Snackbar } from "@mui/material";
import MuiAlert, { AlertProps } from "@mui/material/Alert";
import { getCompetitors } from "../../services/competitor.service";
import { AutoComplete } from "../../constants/interfaces";
import { autoCompleteDefault } from "../../constants/default";
import { FilterByComponent } from "../../components/filterBy/filterBy.component";
import { mappingCompetitorsToAutoComplete } from "../../helpers/mappings";
import { CompetitorInformationContainer } from "../competitors/competitorInfomation/competitor.information";

export const ByCompetitor: React.FC = () => {
  const [autoComplete, setAutoComplete] =
    React.useState<AutoComplete[]>(autoCompleteDefault);
  const [value, setValue] = React.useState<AutoComplete>(
    autoCompleteDefault[0]
  );
  const [info, setInfo] = React.useState<any>(null);
  const [open, setOpen] = React.useState<boolean>(false);

  React.useEffect(() => {
    getCompetitors().then((c) => {
      setAutoComplete(mappingCompetitorsToAutoComplete(c));
    });
  }, []);

  const handleValue = (value: AutoComplete) => {
    if (value.id != '') {
      setInfo(<CompetitorInformationContainer id={value.id} />);
      return;
    }
    
    setOpen(true);
  };

  const handleClose = (event?: React.SyntheticEvent | Event, reason?: string) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

  const handleRemove = () => {
    setInfo(null);
  };

  return (
    <>
      <Snackbar open={open} autoHideDuration={3000} onClose={handleClose} anchorOrigin={{ vertical: 'top', horizontal: 'center' }}>
        <Alert onClose={handleClose} severity="warning" sx={{ width: "100%" }}>
          Seleciona un/a competidor/a
        </Alert>
      </Snackbar>
      <FilterByComponent
        filters={autoComplete}
        value={value}
        setValue={setValue}
        handleValue={handleValue}
        handleRemove={handleRemove}
        label="competitor"
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
