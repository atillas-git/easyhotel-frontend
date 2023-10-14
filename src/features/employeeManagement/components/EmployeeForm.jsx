import HButton from "@/components/HButton/HButton";
import { Autocomplete, Box, List, ListItem, TextField } from "@mui/material";
import PropTypes from "prop-types";
import { useState } from "react";
import { toast } from "react-toastify";
import { saveEmployee } from "../api/hr";
import { sexOptions } from "../config/hrconfig";
import styles from "../styles/hr";
import countries from "@/config/counties";
import useStore from "@/hooks/useStore";

const EmployeeForm = ({ reason, setDrawerOpen }) => {
  const [firstName,setFirstName] = useState("")
  const [lastName,setLastName] = useState("")
  const [email,setEmail] = useState("")
  const [department,setDepartment] = useState("")
  const [sex,setSex] = useState("")
  const [country,setCountry] = useState("")
  const [telNo,setTelNo] = useState("")
  const [error,setError] = useState(null)
  const [loading,setLoading] = useState(false)

  const hotelId = useStore((state)=>state.user).hotelId;

  const handleSaveOrUpdate = async ()=>{
    setError(null)
    if(!firstName || !lastName || !email || !telNo){
      const err = "Please fill the required fields !";
      setError(err)
      return toast.error(err)
    }
    if(reason === "add"){
      await save()
    }
    else{
      updateEmployee()
    }
  }

  const save = async ()=>{
    try {
      setLoading(true)
      const payload = {
        name: `${firstName} ${lastName}`,
        hotelId:hotelId,
        telNo:telNo,
        email:email,
        sex:sex,
        country:country,
        password:"12345"
      }
      await saveEmployee(payload)
      toast.success("Saved Successfully!")
    } catch (error) {
      console.log(error)
    } finally{
      setLoading(false)
      setDrawerOpen(false)
    }
  }

  const updateEmployee = ()=>{
    try {
      console.log(error)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <>
      <List>
        <ListItem
          sx={styles.drawerListItem}
        >
          <TextField 
            label="First Name" 
            variant="standard" 
            type="text"
            required
            error = {(firstName && error) ? null : error ? true : false}
            value={firstName}
            sx={styles.listItemInput}
            onChange={(e)=>setFirstName(e.target.value)}
            />
          <TextField 
            label="Last Name" 
            variant="standard" 
            type="text"
            required
            error = {(lastName && error) ? null :  error ? true : false}
            value={lastName}
            sx={styles.listItemInput}
            onChange={(e)=>setLastName(e.target.value)}
            />
        </ListItem>
        <ListItem
          sx={styles.drawerListItem}
        >
          <TextField 
            label="Email" 
            variant="standard"
            type="email"
            required
            value={email}
            sx={styles.listItemInput}
            error = {(email && error) ? null :  error ? true : false}
            onChange={(e)=>setEmail(e.target.value)} 
          />
          <TextField 
            label="Department" 
            variant="standard" 
            type="text"
            value={department}
            sx={styles.listItemInput}
            onChange={(e)=>setDepartment(e.target.value)}
          />
        </ListItem>
        <ListItem
          sx={styles.drawerListItem}
        >
          <TextField 
            label="Tel No" 
            variant="standard"
            required 
            type="tel"
            sx={styles.listItemInput}
            error = {(telNo && error) ? null : error ? true : false}
            onChange={(e)=>setTelNo(e.target.value)}
          />
          <Autocomplete
            disablePortal
            options={sexOptions}
            onChange={(e,value)=>setSex(value ? value.value: "")}
            sx={styles.listItemInput}
            renderInput={(params)=>
              <TextField 
                label="Sex" 
                variant="standard"
                required
                error = {(sex && error) ? null : error ? true : false}
                {...params}
            />}
          />
        </ListItem>
        <ListItem
          sx={styles.drawerListItem}
        >
          <Autocomplete
            disablePortal
            options={countries}
            sx={styles.listItemInput}
            onChange={(e,value)=>setCountry(value ? value.value : "")}
            renderInput={(params)=>
              <TextField 
                label="Country" 
                variant="standard" 
                {...params}
                required
                error = {(country && error) ? null : error ? true : false}
                value={country}
              />}
          />
          <TextField 
            label="Policies" 
            variant="standard" 
            sx={styles.listItemInput}
            />
        </ListItem>
      </List>
      <Box sx={{ marginTop: "auto", p: 2, display: "flex", gap: 2 }}>
        <HButton color={"contrastText"} onClick={() => setDrawerOpen(false)}>
          Cancel
        </HButton>
        <HButton onClick={handleSaveOrUpdate} loading={loading}>
          {reason === "add" && "Save"}
          {reason === "update" && "Update"}
        </HButton>
      </Box>
    </>
  );
};

EmployeeForm.propTypes = {
  reason: PropTypes.oneOf(["add", "update"]),
  setDrawerOpen: PropTypes.func,
};

export default EmployeeForm;
