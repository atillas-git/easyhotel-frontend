import { useTheme } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import PropTypes from "prop-types";

const HNavbar = ({ open, handleDrawerOpen, appBarStyles, toolBarStyles }) => {
  const theme = useTheme();
  return (
    <AppBar
      position="fixed"
      open={open}
      sx={appBarStyles ? appBarStyles : styles.appbar(theme, open)}
    >
      <Toolbar sx={toolBarStyles ? toolBarStyles : styles.toolbar}>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          onClick={handleDrawerOpen}
          edge="start"
          sx={styles.iconButton(open)}
        >
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" noWrap component="div">
          EasyHotel
        </Typography>
      </Toolbar>
    </AppBar>
  );
};
const styles = {
  appbar: (theme, open) => ({
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    ...(open && {
      width: {
        xs: `calc(100% - ${50}px)`,
        md: `calc(100% - ${250}px)`,
      },
      marginLeft: {
        xs: `${50}px`,
        md: `${250}px`,
      },
      transition: theme.transitions.create(["margin", "width"], {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
    }),
    boxShadow: "none",
    height: 65,
    display: "flex",
    alignItems: "center",
  }),
  toolbar: () => ({
    color: "white",
    width: "100%",
    ml: 7,
  }),
  iconButton: (open) => ({
    mr: 2,
    ...(open && { display: "none" }),
  }),
};

HNavbar.propTypes = {
  open: PropTypes.bool,
  handleDrawerOpen: PropTypes.func,
  appBarStyles: PropTypes.object,
  toolBarStyles: PropTypes.object,
};
export default HNavbar;
