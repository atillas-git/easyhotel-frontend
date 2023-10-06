import HButton from "@/components/HButton/HButton"
import { Box, List, ListItem, TextField } from "@mui/material"
import PropTypes from 'prop-types';

const DepartmentForm = ({reason,setDrawerOpen}) => {
  return (
    <>    
        <List>
            <ListItem sx={{display:"flex" ,alignItems:"center",justifyContent:"space-between"}}>
                <TextField label = "First Name" variant='standard'/>
                <TextField label = "Last Name" variant='standard'/>
            </ListItem>
            <ListItem sx={{display:"flex" ,alignItems:"center",justifyContent:"space-between"}}>
                <TextField label = "Email" variant='standard'/>
                <TextField label = "Department" variant='standard'/>
            </ListItem>
            <ListItem sx={{display:"flex" ,alignItems:"center",justifyContent:"space-between"}}>
                <TextField label = "Tel No" variant='standard'/>
                <TextField label = "Sex" variant='standard'/>
            </ListItem>
            <ListItem sx={{display:"flex" ,alignItems:"center",justifyContent:"space-between"}}>
                <TextField label = "Country" variant='standard'/>
                <TextField label = "Policies" variant='standard'/>
            </ListItem>
        </List>
        <Box sx={{marginTop:"auto",p:2,display:"flex",gap:2}}>
            <HButton color={"contrastText"} onClick={()=>setDrawerOpen(false)}>
              Cancel
            </HButton>
            <HButton>
              {reason === "add" && "Save"}
              {reason === "update" && "Update"}
            </HButton>
        </Box>
    </>
  )
}

DepartmentForm.propTypes = {
    reason:PropTypes.oneOf(["add","update"]),
    setDrawerOpen:PropTypes.func
}

export default DepartmentForm