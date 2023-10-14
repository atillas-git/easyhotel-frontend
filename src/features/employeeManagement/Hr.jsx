import { Box, Divider, Drawer, IconButton, Tooltip, Typography } from "@mui/material";
import { useCallback, useEffect, useMemo, useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
import SearchIcon from "@mui/icons-material/Search";
import HButton from "@/components/HButton/HButton";
import SearchEmployeeForm from "./components/SearchEmployeeForm";
import EmployeeForm from "./components/EmployeeForm";
import styles from "./styles/hr";
import AddMenu from "./components/AddMenu";
import DepartmentForm from "./components/DepartmentForm";
import { getEmployees } from "./api/hr";
import HTable from "@/components/HTable/HTable";
import useStore from "@/hooks/useStore";
import { useSearchParams } from "react-router-dom";
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

const Hr = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [reason, setReason] = useState("add");
  const [employees,setEmployees] = useState([]);
  const [loading,setLoading] = useState(false)
  const [searchParams] = useSearchParams()
  
  const user = useStore((state)=>state.user)

  useEffect(()=>{
    searchEmployees({},searchParams)
  },[searchParams])

  const searchEmployees = useCallback(async (filter = {maxResult:50},searchParams = [])=>{
    try {
      setLoading(true)
      const hotelId = user.hotelId;
      const payload = {
        ...filter
      }
      for (const [key, value] of searchParams) {
        if(value){
          payload[key] = value
        }
      }
      const data = await getEmployees({...payload,hotelId:hotelId})
      setEmployees(data)
    } catch (error) {
      console.log(error)
    } finally{
      setLoading(false)
    }
  },[user])

  const syncFunction = ()=>()=>{
    return searchEmployees({},searchParams)
  }

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

  const rows  = ()=>{
    return employees ? employees.map((employee)=>({
      ...employee,
      id:employee._id,
    })):[]
  }

  const headCells = useMemo(()=>{
    return [
      {
        id:"id",
        field:"_id",
        headerName:"ID",
        width:250
      },
      {
        id:"name",
        field:"name",
        headerName:"Name",
        width:250
      },
      {
        id:"sex",
        field:"sex",
        headerName:"Sex",
        width:150
      },
      {
        id:"isRoot",
        field:"isRoot",
        headerName:"Root",
        width:150
      },
      {
        id:"hotelId",
        field:"hotelId",
        headerName:"Hotel ID",
        width:250
      },
      {
        id:"telNo",
        field:"telNo",
        headerName:"Tel No",
        width:250
      },
      {
        id:"country",
        field:"country",
        headerName:"Country",
        width:100
      },
      {
        id:"options",
        field:"options",
        headerName:"Options",
        with:250,
        renderCell:()=>{
          return(
            <Box sx={{display:"flex",alignItems:"center",gap:1,mr:2}}>
              <Tooltip title = "edit">
                <IconButton>
                  <EditIcon/>
                </IconButton>
              </Tooltip>
              <Tooltip title = "delete">
                <IconButton>
                  <DeleteIcon/>
                </IconButton>
              </Tooltip>
            </Box>
          )
        }
      }
    ]
  },[])

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
            <EmployeeForm 
              setDrawerOpen={setDrawerOpen} 
              reason={reason} />
          )}
          {reason === "search" && (
            <SearchEmployeeForm 
              searchEmployees={searchEmployees}
              setDrawerOpen={setDrawerOpen} />
          )}
          {(reason === "addDepartment" || reason === "updateDepartment") && (
            <DepartmentForm 
              setDrawerOpen={setDrawerOpen} 
              reason={reason} />
          )}
        </Box>
      </Drawer>
      <Box sx={styles.table}>
        <HTable
          heading={"Employees"} 
          columns={headCells}
          loading={loading}
          rows={rows()}
          syncData={true}
          syncFunction={syncFunction()}
          checkboxSelection
          maxCount={employees.length}
        />
      </Box>
    </Box>
  );
};

export default Hr;
