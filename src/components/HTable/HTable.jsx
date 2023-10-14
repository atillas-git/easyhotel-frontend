import { Box, IconButton, Tooltip, Typography } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import FileDownloadIcon from '@mui/icons-material/FileDownload';
import PropTypes from "prop-types";
import styles from "./styles/htable";
import HButton from "../HButton/HButton";
import SyncIcon from '@mui/icons-material/Sync';
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
  syncData,
  syncFunction,
  rowsPerPage,
  heading,
  ...other
}) => {
  const onPageModelChange = (model) => {
    if (typeof onPageChange === "function") {
      return onPageChange(model.page);
    }
    return;
  };
  return (
    <Box sx={styles.main}>
      <Box sx={styles.heading}>
        <Typography variant="h6" fontWeight={"bold"} color={"primary.dark"}>
          {heading}
        </Typography>
        <Box sx={styles.exportContainer}>
          {
            (syncData && syncFunction && typeof syncFunction === "function") &&           
            <HButton startIcon={<SyncIcon/>} onClick={()=>syncFunction()}>
              Sync Data
            </HButton>  
          }
          <Tooltip title = "Export to Excel">
            <IconButton>
              <FileDownloadIcon/>
            </IconButton>
          </Tooltip>
        </Box>
      </Box>
      <DataGrid
        columns={columns}
        rows={rows}
        checkboxSelection={checkboxSelection ? checkboxSelection : false}
        pagination={pagination ? pagination : true}
        onPaginationModelChange={onPageModelChange}
        pageSizeOptions={pageSizeOptions ? pageSizeOptions : []}
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
  heading:PropTypes.string,
  syncData:PropTypes.bool,
  syncFunction:PropTypes.func
};

export default HTable;
