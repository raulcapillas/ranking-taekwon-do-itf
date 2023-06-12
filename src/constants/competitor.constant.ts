import { GridColDef } from "@mui/x-data-grid";

export const CompetitorColumns: GridColDef[] = [
  {
      field: "date",
      headerName: "Fecha",
      width: 200,
    },
    {
      field: "event",
      headerName: "Evento",
      width: 350,
    },
    {
      field: "type",
      headerName: "Tipo de evento",
      width: 250,
    },
    {
      field: "category",
      headerName: "Categoría",
      width: 500,
    },
    {
      field: "ranking",
      headerName: "Ranking",
      type: "number",
      width: 100,
    },
    {
      field: "fights_won",
      headerName: "Rondas ganadas",
      type: "number",
      description: "Tooltip example",
      width: 150,
    },
    {
      field: "factor",
      headerName: "Valor",
      width: 75,
    },
    {
      field: "total",
      headerName: "Total",
      type: "number",
      width: 75,
    },
  ];