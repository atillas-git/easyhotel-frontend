import { Box } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import PropTypes from "prop-types";
const HTable = ({
  columns,
  rows,
  checkboxSelection,
  pagination,
  onPageChange,
  pageSizeOptions,
  loading,
  maxCount,
  sx,
  rowsPerPage,
  ...other
}) => {
  const onPageModelChange = (model) => {
    if (typeof onPageChange === "function") {
      return onPageChange(model.page);
    }
    return;
  };
  return (
    <Box>
      <DataGrid
        columns={columns}
        rows={rows}
        checkboxSelection={checkboxSelection ? checkboxSelection : false}
        pagination={pagination ? pagination : true}
        onPaginationModelChange={onPageModelChange}
        pageSizeOptions={pageSizeOptions}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: rowsPerPage ? rowsPerPage : 15,
            },
          },
        }}
        loading={loading}
        rowCount={maxCount}
        {...other}
        sx={{
          ...{
            backgroundColor: "white",
            color: "primary.dark",
            "& .MuiDataGrid-columnHeaders": {
              backgroundColor: "primary.contrastText",
              color: "primary.light",
            },
            "& .MuiDataGrid-columnHeaders svg": {
              color: "primary.light",
            },
            "& .MuiDataGrid-cell": {
              color: "primary.dark",
            },
            "& .MuiDataGrid-columnHeaderTitle": {
              fontWeight: "bold",
            },
          },
          ...sx,
        }}
        paginationMode="server"
      />
    </Box>
  );
};

HTable.propTypes = {
  columns: PropTypes.array.isRequired,
  rows: PropTypes.array.isRequired,
  checkboxSelection: PropTypes.bool,
  pagination: PropTypes.bool,
  onPageChange: PropTypes.func,
  pageSizeOptions: PropTypes.arrayOf(PropTypes.number),
  loading: PropTypes.bool,
  maxCount: PropTypes.number.isRequired,
  sx: PropTypes.object,
  rowsPerPage: PropTypes.number,
};

export default HTable;
