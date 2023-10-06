import { Box } from "@mui/material"
import { DataGrid } from "@mui/x-data-grid"

const HTable = ({columns,rows,checkboxSelection,pagination,onPaginationModelChange,pageSizeOptions,loading}) => {
  return (
    <Box>
        <DataGrid
            columns={columns}
            rows={rows}
            checkboxSelection = {checkboxSelection ? checkboxSelection : false}
            pagination = {pagination ? pagination : true}
            onPaginationModelChange={onPaginationModelChange}
            pageSizeOptions={pageSizeOptions}
            loading = {loading}
            paginationMode="server"
        />
    </Box>
  )
}

export default HTable