import HButton from "@/components/HButton/HButton"
import { Divider, Menu, MenuItem, MenuList, Paper } from "@mui/material"
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import BusinessIcon from '@mui/icons-material/Business';
import { useState } from "react";
import styles from "../styles/hr";
import AddIcon from '@mui/icons-material/Add';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import PropTypes from 'prop-types';

const AddMenu = ({handleAddEmployee,handleAddDepartment}) => {

    const [addAnchorEl, setAddAnchorEl] = useState(null);
  
    const open = Boolean(addAnchorEl);
  
    const handleClick = (event) => {
      setAddAnchorEl(event.currentTarget);
    };
    
    const handleClose = () => {
      setAddAnchorEl(null);
    };

    const onAddDepartment = ()=>{
        handleAddDepartment()
        handleClose()
    }

    const onAddEmployee = ()=>{
        handleAddEmployee()
        handleClose()
    }
  
    const addOpen = Boolean(addAnchorEl);
    return (
    <>
        <HButton
          id = "add-menu-button" 
          variant='contained' 
          aria-controls={addOpen ? 'add-menu' : undefined}
          aria-haspopup="true"
          aria-expanded={addOpen ? 'true' : undefined}
          onClick={handleClick}
          sx={styles.headingButton()}
          startIcon={<AddIcon/>}
          endIcon={<ArrowDropDownIcon/>}
        >
          Add
        </HButton>
        <Menu 
          id='add-menu'
          anchorEl={addAnchorEl}
          open={open}
          onClose={handleClose}
          MenuListProps={{
            'aria-labelledby': 'add-menu-button',
          }}
        >
          <Paper sx={{width:200,boxShadow:"none",p:0}}>
            <MenuList>
              <MenuItem sx={{gap:1}} onClick={onAddEmployee}>
                <PersonAddIcon/>
                Add Employee
              </MenuItem>
              <Divider/>
              <MenuItem sx={{gap:1}} onClick={onAddDepartment}>
                <BusinessIcon/>
                Add Department
              </MenuItem>
            </MenuList>
          </Paper>
        </Menu>
    </>
  )
}

AddMenu.propTypes = {
    handleAddEmployee:PropTypes.func.isRequired,
    handleAddDepartment:PropTypes.func.isRequired
}

export default AddMenu