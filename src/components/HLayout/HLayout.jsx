/* eslint-disable no-unused-vars */
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import { useState } from "react";
import HNavbar from "../HNavbar/HNavbar";
import HSidebar from "../HSidebar/HSidebar";

const HLayout = ({ children }) => {
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
      <HNavbar open={open} handleDrawerOpen={handleDrawerOpen}></HNavbar>
      <HSidebar open={open} handleDrawerClose={handleDrawerClose} />
      <Box sx={style.main}>
        <Box sx={style.layout(theme, open)}>{children}</Box>
      </Box>
    </Box>
  );
};

const style = {
  layoutWrapper: (theme) => ({
    flexGrow: 1,
    display: "flex",
    position: "relative",
  }),
  main: (theme) => ({
    position: "absolute",
    left: 0,
    minWidth: "100%",
    minHeight: "100vh",
  }),
  layout: (theme, open) => ({
    marginTop: "65px",
    overflowY: "auto",
    flexGrow: 1,
    overflowX:"hidden",
    minHeight: `calc(100vh - ${65}px)`,
    backgroundColor: theme.palette.primary.light,
    ...(open && {
      minWidth: {
        xs: `calc(100% - ${50}px)`,
        md: `calc(100% - ${300}px)`,
      },
      marginLeft: {
        xs: `${50}px`,
        md: `${300}px`,
      },
      transition: theme.transitions.create(["margin", "width"], {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
    }),
  }),
};

export default HLayout;
