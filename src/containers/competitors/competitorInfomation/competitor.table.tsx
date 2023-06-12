import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";
import { CompetitorColumns } from "../../../constants/competitor.constant";
import { CompetitorEvents } from "../../../constants/interfaces";

interface CompetitorInformationProps {
  rows: CompetitorEvents[];
}

export const CompetitorTable: React.FC<CompetitorInformationProps> = ({
  rows,
}) => {
  return (
    <>
        <DataGrid
          rows={rows}
          columns={CompetitorColumns}
          pageSize={100}
          rowsPerPageOptions={[]}
          autoHeight
          autoPageSize
          hideFooter={true}
          disableColumnMenu
          disableColumnFilter
          disableColumnSelector
          sx={{
            '.MuiDataGrid-columnSeparator': {
              display: 'none',
            },
          }}
        />
    </>
  );
};
