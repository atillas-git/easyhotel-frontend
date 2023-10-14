import HButton from "@/components/HButton/HButton";
import { Autocomplete, Box, List, ListItem, TextField } from "@mui/material";
import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import styles from "../styles/hr";
import { sexOptions } from "../config/hrconfig";
import countries from "@/config/counties";
import { useSearchParams } from "react-router-dom";
const SearchEmployeeForm = ({ setDrawerOpen }) => {
  const [name,setName] = useState("")
  const [email,setEmail] = useState("")
  const [department,setDepartment] = useState("")
  const [telNo,setTelNo] = useState("");
  const [country,setCountry] = useState("");
  const [sex,setSex] = useState("");
  
  const [searchParams,setSearchParams] = useSearchParams()

  useEffect(()=>{
    for (const [key, value] of searchParams) {
      if(value){
        if(key === "email"){
          setEmail(value)
        }
        else if(key === "name"){
          setName(value)
        }
        else if(key === "department"){
          setDepartment(value)
        }
        else if(key === "country"){
          setCountry(value)
        }
        else if(key === "telNo"){
          setTelNo(telNo)
        }
        else{
          setSex(value)
        }
      }
    }
  },[searchParams])

  const handleSearch = ()=>{
    const newSearchParams = {
      name:name,
      email:email,
      department:department,
      telNo:telNo,
      country:country,
      sex:sex
    }
    setSearchParams(newSearchParams)
    setDrawerOpen(false)
  }

  const clear = ()=>{
    setSearchParams()
    setCountry("")
    setDepartment("")
    setTelNo("")
    setEmail("")
    setName("")
    setSex("")
  }
  
  return (
    <>
      <List>
        <ListItem
          sx={styles.drawerListItem}
        >
          <TextField
            fullWidth 
            label="Name"
            variant="standard" 
            onChange={(e)=>setName(e.target.value)}
            value={name}
            />
        </ListItem>
        <ListItem
          sx={styles.drawerListItem}
        >
          <TextField 
            label="Email"
            fullWidth 
            variant="standard" 
            onChange={(e)=>setEmail(e.target.value)}
            value={email}
            />
          <TextField
            fullWidth 
            label="Department" 
            variant="standard"
            value={department} 
            onChange={(e)=>setDepartment(e.target.value)}
            />
        </ListItem>
        <ListItem
          sx={styles.drawerListItem}
        >
          <TextField
            fullWidth 
            label="Tel No" 
            variant="standard"
            value={telNo} 
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
                value={sex}
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
                value={country}
              />}
          />
          <TextField
            fullWidth 
            label="Policies" 
            variant="standard" 
          />
        </ListItem>
      </List>
      <Box sx={{ marginTop: "auto", p: 2, display: "flex", gap: 2 }}>
        <HButton color={"contrastText"} onClick={() => setDrawerOpen(false)}>
          Cancel
        </HButton>
        <HButton color={"dark"} onClick={clear}>
          Clear
        </HButton>
        <HButton onClick={handleSearch}>Search</HButton>
      </Box>
    </>
  );
};
SearchEmployeeForm.propTypes = {
  setDrawerOpen: PropTypes.func,
};
export default SearchEmployeeForm;
