import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";
import { CategoryColumns } from "../../../constants/category.constant";
import { CategoryEvents } from "../../../constants/interfaces";

interface CategoryInformationProps {
  rows: CategoryEvents[];
}

export const CategoryTable: React.FC<CategoryInformationProps> = ({
  rows,
}) => {
  return (
    <>
        <DataGrid
          rows={rows}
          columns={CategoryColumns}
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
