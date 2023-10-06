import { Box, Divider, Drawer, IconButton, Typography } from "@mui/material";
import { useCallback, useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import CloseIcon from "@mui/icons-material/Close";
import SearchIcon from "@mui/icons-material/Search";
import HButton from "@/components/HButton/HButton";
import SearchEmployeeForm from "./components/SearchEmployeeForm";
import EmployeeForm from "./components/EmployeeForm";
import styles from "./styles/hr";
import AddMenu from "./components/AddMenu";
import DepartmentForm from "./components/DepartmentForm";
const columns = [
  { field: "id", headerName: "ID", width: 90 },
  {
    field: "firstName",
    headerName: "First name",
    width: 150,
    editable: true,
  },
  {
    field: "lastName",
    headerName: "Last name",
    width: 150,
    editable: true,
  },
  {
    field: "age",
    headerName: "Age",
    type: "number",
    width: 110,
    editable: true,
  },
  {
    field: "fullName",
    headerName: "Full name",
    sortable: false,
    width: 160,
    valueGetter: (params) =>
      `${params.row.firstName || ""} ${params.row.lastName || ""}`,
  },
];

const rows = [
  { id: 1, lastName: "Snow", firstName: "Jon", age: 35 },
  { id: 2, lastName: "Lannister", firstName: "Cersei", age: 42 },
  { id: 3, lastName: "Lannister", firstName: "Jaime", age: 45 },
  { id: 4, lastName: "Stark", firstName: "Arya", age: 16 },
  { id: 5, lastName: "Targaryen", firstName: "Daenerys", age: null },
  { id: 6, lastName: "Melisandre", firstName: null, age: 150 },
  { id: 7, lastName: "Clifford", firstName: "Ferrara", age: 44 },
  { id: 8, lastName: "Frances", firstName: "Rossini", age: 36 },
  { id: 9, lastName: "Roxie", firstName: "Harvey", age: 65 },
];

const Hr = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [reason, setReason] = useState("add");

  const handleAddDepartment = useCallback(() => {
    setReason("addDepartment");
    setDrawerOpen(true);
  }, []);

  const handleAddEmployee = useCallback(() => {
    setReason("add");
    setDrawerOpen(true);
  }, []);

  const handleSearchEmployee = useCallback(() => {
    setReason("search");
    setDrawerOpen(true);
  }, []);

  return (
    <Box sx={styles.main}>
      <Box sx={styles.heading}>
        <AddMenu
          handleAddDepartment={handleAddDepartment}
          handleAddEmployee={handleAddEmployee}
        />
        <HButton
          variant="contained"
          sx={styles.headingButton()}
          onClick={handleSearchEmployee}
          startIcon={<SearchIcon />}
        >
          Search
        </HButton>
      </Box>
      <Drawer
        open={drawerOpen}
        anchor="right"
        variant="temporary"
        onClose={() => setDrawerOpen(false)}
      >
        <Box sx={styles.drawerContainer}>
          <Box sx={styles.drawerHeader}>
            {reason === "add" && (
              <Typography variant="h6" fontWeight={"bold"}>
                Add New Employee
              </Typography>
            )}
            {reason === "search" && (
              <Typography variant="h6" fontWeight={"bold"}>
                Search Employee
              </Typography>
            )}
            {reason === "addDepartment" && (
              <Typography variant="h6" fontWeight={"bold"}>
                Add Department
              </Typography>
            )}
            <IconButton onClick={() => setDrawerOpen(false)}>
              <CloseIcon />
            </IconButton>
          </Box>
          <Divider />
          {(reason === "add" || reason === "update") && (
            <EmployeeForm setDrawerOpen={setDrawerOpen} reason={reason} />
          )}
          {reason === "search" && (
            <SearchEmployeeForm setDrawerOpen={setDrawerOpen} />
          )}
          {(reason === "addDepartment" || reason === "updateDepartment") && (
            <DepartmentForm setDrawerOpen={setDrawerOpen} reason={reason} />
          )}
        </Box>
      </Drawer>
      <DataGrid
        rows={rows}
        columns={columns}
        onPaginationModelChange={(model) => console.log(model)}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 15,
            },
          },
        }}
        rowCount={50}
        paginationMode="server"
        disableColumnFilter
        sx={{
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
        }}
        pageSizeOptions={[15, 25]}
        disableRowSelectionOnClick
      />
    </Box>
  );
};

export default Hr;
