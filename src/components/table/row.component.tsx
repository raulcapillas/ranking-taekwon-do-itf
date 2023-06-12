import * as React from "react";
import {
  Box,
  Collapse,
  IconButton,
  Table,
  TableBody,
  TableHead,
  TableRow,
  Typography,
  Avatar,
  Chip,
} from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import { Umpire, UmpireEvents } from "../../constants";
import { StyledTableCell } from "./collapsibleTable.style";
import { useTranslation } from "react-i18next";

const url_photo = "https://online.taekwondoitf.es/Content/Member/socio_";

interface RowProps {
  umpire: Umpire;
  position: number;
  umpire_events: UmpireEvents;
}

export const Row: React.FunctionComponent<RowProps> = (props: RowProps) => {
  const { umpire, position, umpire_events } = props;
  const [open, setOpen] = React.useState(false);
  const { t } = useTranslation();

  const listItem = (tournament: string, u: number) => {
    if (u > 0) {
      return (
        <TableRow key={`${tournament}-${u}`}>
          <StyledTableCell>{tournament}</StyledTableCell>
          <StyledTableCell>{u}</StyledTableCell>
        </TableRow>
      );
    }

    return "";
  };

  return (
    <>
      <TableRow sx={{ "& > *": { borderBottom: "unset" } }}>
        <StyledTableCell>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </StyledTableCell>
        <StyledTableCell component="th" scope="row">
          <Avatar
            alt={`${umpire.name} ${umpire.lastName}`}
            src={`${url_photo}${umpire.photo}`}
            sx={{ width: 56, height: 56 }}
          />
        </StyledTableCell>
        <StyledTableCell component="th" scope="row" align="center">
          <Chip label={position + 1} variant="outlined" />
        </StyledTableCell>
        <StyledTableCell align="center">{umpire.name}</StyledTableCell>
        <StyledTableCell align="center">{umpire.lastName}</StyledTableCell>
        <StyledTableCell align="center">
          <Chip label={umpire.degree} variant="outlined" />
        </StyledTableCell>
        <StyledTableCell align="center">{umpire.school}</StyledTableCell>
        <StyledTableCell align="center">
          <Chip label={umpire.total} variant="outlined" />
        </StyledTableCell>
      </TableRow>
      <TableRow>
        <StyledTableCell
          style={{ paddingBottom: 0, paddingTop: 0 }}
          colSpan={12}
        >
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box sx={{ margin: 1 }}>
              <Typography variant="h5" gutterBottom component="div">
                Detalle de puntos
              </Typography>
              <Table size="small" aria-label="purchases">
                <TableHead>
                  <TableRow>
                    <StyledTableCell>Evento</StyledTableCell>
                    <StyledTableCell>Puntos</StyledTableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {listItem(umpire_events.spain_current, umpire.spain_current)}
                  {listItem(umpire_events.spain_last, umpire.spain_last)}
                  {listItem(umpire_events.barcelona, umpire.barcelona)}
                  {listItem(umpire_events.benidorm, umpire.benidorm)}
                  {listItem(umpire_events.malaga, umpire.malaga)}
                  {listItem(umpire_events.roquetas, umpire.roquetas)}
                  {listItem(umpire_events.algeciras, umpire.algeciras)}
                  {listItem(
                    umpire_events.european_current,
                    umpire.european_current
                  )}
                  {listItem(umpire_events.nuc, umpire.nuc)}
                  {listItem(umpire_events.iuc, umpire.iuc)}
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </StyledTableCell>
      </TableRow>
    </>
  );
};
