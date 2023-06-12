import * as React from "react";
import { Avatar, Chip } from "@mui/material";
import { GridColDef } from "@mui/x-data-grid";

export const CategoryColumns: GridColDef[] = [
  {
    field: "photo",
    headerName: "",
    width: 200,
    sortable: false,
    renderCell: (param) => {
      return <Avatar src={param.value} />;
    },
  },
  {
    field: "position",
    headerName: "Posición",
    width: 200,
    sortable: false,
    renderCell: (param) => {
      switch (param.value) {
        case 1:
          return (
            <Chip
              label={param.value}
              variant="outlined"
              color="primary"
              sx={{ color: "#F6D100" }}
            />
          );
        case 2:
          return (
            <Chip
              label={param.value}
              variant="outlined"
              color="primary"
              sx={{ color: "#BBBBBA" }}
            />
          );
        case 3:
          return (
            <Chip
              label={param.value}
              variant="outlined"
              color="primary"
              sx={{ color: "#C77D31" }}
            />
          );
        default:
          return (
            <Chip label={param.value} variant="outlined" color="primary" />
          );
      }
    },
  },
  {
    field: "competitor_name",
    headerName: "Nombre",
    width: 350,
    sortable: false,
  },
  {
    field: "competitor_lastname",
    headerName: "Apellidos",
    width: 350,
    sortable: false,
  },
  {
    field: "club",
    headerName: "Escuela",
    type: "number",
    width: 350,
    sortable: false,
  },
  {
    field: "total",
    headerName: "Total",
    type: "number",
    description: "Tooltip example",
    width: 200,
    sortable: false,
  },
];
