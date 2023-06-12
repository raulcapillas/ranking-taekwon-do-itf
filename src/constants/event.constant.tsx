import * as React from "react";
import { Avatar, Chip } from "@mui/material";
import { GridColDef } from "@mui/x-data-grid";

export const TournamentsColumns: GridColDef[] = [
  {
    field: "competitor_photo",
    headerName: "",
    width: 100,
    sortable: false,
    renderCell: (param) => {
      return <Avatar src={param.value} />;
    },
  },
  {
    field: "competitor_rank",
    headerName: "Rank",
    width: 100,
    renderCell: (param) => {
      return <Chip label={param.value} variant="outlined" />;
    },
    
  },
  {
    field: "competitor_name",
    headerName: "Nombre",
    width: 300,
  },
  {
    field: "competitor_lastname",
    headerName: "Apellidos",
    width: 350,
  },
  {
    field: "category_name",
    headerName: "Categoría",
    width: 500,
  },
  {
    field: "club_name",
    headerName: "Club",
    width: 400,
  },
];


export const EventClubColumns: GridColDef[] = [
  {
    field: "rank",
    headerName: "Rank",
    width: 100,
  },
  {
    field: "club",
    headerName: "Club",
    width: 500,
  },
  {
    field: "place_1",
    headerName: "Primera posición (Oro)",
    width: 250,
  },
  {
    field: "place_2",
    headerName: "Segunda posición (Plata)",
    width: 250,
  },
  {
    field: "place_3",
    headerName: "Tercera posición (Bronce)",
    width: 250,
  },
];
