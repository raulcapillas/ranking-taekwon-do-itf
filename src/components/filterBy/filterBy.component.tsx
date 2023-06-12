import * as React from "react";
import {
  Grid,
  Button,
  Box,
  Autocomplete,
  TextField,
} from "@mui/material";
import { useTranslation } from "react-i18next";
import { AutoComplete } from "../../constants/interfaces";
import { autoCompleteDefault } from "../../constants/default";

interface FilterByProps {
  filters: AutoComplete[];
  value: AutoComplete;
  setValue: (v: AutoComplete) => void;
  handleValue: (v: AutoComplete) => void;
  handleRemove: () => void;
  label: string;
}

export const FilterByComponent: React.FC<FilterByProps> = ({
  filters,
  value,
  setValue,
  handleValue,
  handleRemove,
  label,
}) => {
  const { t } = useTranslation();

  return (
    <>
      <Grid container id="filterBy-grid-container" spacing={2} sx={{ justifyContent: "center" }}>
        <Grid item id="filterBy-grid-item" xs={12} md={6}>
          <Box id="filterBy-box" sx={{ minWidth: 120 }}>
            <Autocomplete
              id={`${label}-combo-box`}
              disablePortal
              value={value}
              fullWidth={true}
              onChange={(event, newValue) => {
                handleRemove();
                setValue(newValue ? newValue : autoCompleteDefault[0]);
              }}
              options={filters}
              getOptionLabel={(c) => `${c.name}`}
              renderInput={(params) => (
                <TextField
                  {...params}
                  id={params.id}
                  label={t(`${label}`)}
                  variant="outlined"
                />
              )}
            />
          </Box>
        </Grid>
        <Grid item xs={1} md={1}>
          <Button
            variant="contained"
            color="primary"
            size="large"
            onClick={() => handleValue(value)}
          >
            {t("search")}
          </Button>
        </Grid>
      </Grid>
    </>
  );
};
