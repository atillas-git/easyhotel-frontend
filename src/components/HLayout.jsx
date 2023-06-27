/* eslint-disable no-unused-vars */
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import { useState } from "react";
import HNavbar from "./HNavbar";
import HSidebar from "./HSidebar";

const HLayout = () => {
  const theme = useTheme();
  const [open, setOpen] = useState(true);
  const handleDrawerOpen = () => {
    setOpen(true);
  };
  const handleDrawerClose = () => {
    setOpen(false);
  };
  return (
    <Box sx={style.layoutWrapper(theme)}>
      <HNavbar open={open} handleDrawerOpen={handleDrawerOpen} />
      <HSidebar open={open} handleDrawerClose={handleDrawerClose} />
    </Box>
  );
};

const style = {
  layoutWrapper: (theme) => ({
    flexGrow: 1,
    display: "flex",
  }),
};

export default HLayout;
