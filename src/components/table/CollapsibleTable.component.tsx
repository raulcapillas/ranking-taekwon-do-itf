import * as React from "react";
import {
  Table,
  TableBody,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";
import { Umpire, UmpireEvents } from "../../constants";
import { StyledTableCell } from "./collapsibleTable.style";
import { Row } from "./row.component";
import { useTranslation } from "react-i18next";

interface CollapsibleTableProps {
  umpires: Umpire[];
  umpire_events: UmpireEvents;
}

export const CollapsibleTableComponent: React.FunctionComponent<
  CollapsibleTableProps
> = ({ umpires, umpire_events }) => {
  const { t } = useTranslation();

  return (
    <TableContainer component={Paper}>
      <Table aria-label="collapsible table">
        <TableHead>
          <TableRow>
            <StyledTableCell />
            <StyledTableCell align="center"></StyledTableCell>
            <StyledTableCell align="center">{t("position")}</StyledTableCell>
            <StyledTableCell align="center">{t("name")}</StyledTableCell>
            <StyledTableCell align="center">{t("lastname")}</StyledTableCell>
            <StyledTableCell align="center">{t("degree")}</StyledTableCell>
            <StyledTableCell align="center">{t("school")}</StyledTableCell>
            <StyledTableCell align="center">{t("points")}</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {umpires.map((umpire: Umpire, index: number) => (
            (umpire.total != 0) &&
            <Row
              key={umpire.id}
              umpire={umpire}
              umpire_events={umpire_events}
              position={index}
            ></Row>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
