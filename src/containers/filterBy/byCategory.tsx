import * as React from "react";
import { getCategories } from "../../services/categories.service";
import { AutoComplete } from "../../constants/interfaces";
import { autoCompleteDefault } from "../../constants/default";
import { FilterByComponent } from "../../components/filterBy/filterBy.component";
import { mappingCategoriesToAutoComplete } from "../../helpers/mappings";
import { Snackbar } from "@mui/material";
import MuiAlert, { AlertProps } from "@mui/material/Alert";
import { CategoryInformationContainer } from "../categories/categoryInformation/category.information";

export const ByCategory: React.FC = () => {
  const [autoComplete, setAutoComplete] =
    React.useState<AutoComplete[]>(autoCompleteDefault);
  const [value, setValue] = React.useState<AutoComplete>(
    autoCompleteDefault[0]
  );
  const [info, setInfo] = React.useState<any>(null);
  const [open, setOpen] = React.useState<boolean>(false);

  React.useEffect(() => {
    getCategories().then((c) => {
      setAutoComplete(
        mappingCategoriesToAutoComplete(c).sort((a, b) =>
          b.name > a.name ? -1 : b.name < a.name ? 1 : 0
        )
      );
    });
  }, []);

  const handleValue = (value: AutoComplete) => {
    if (value.id != "") {
      setInfo(<CategoryInformationContainer id={value.id} name={value.name} />);
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
          Seleciona una categoría
        </Alert>
      </Snackbar>
      <FilterByComponent
        filters={autoComplete}
        value={value}
        setValue={setValue}
        handleValue={handleValue}
        handleRemove={handleRemove}
        label="category"
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
