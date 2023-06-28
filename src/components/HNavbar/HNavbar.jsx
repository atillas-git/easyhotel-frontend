import { useTheme } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import PropTypes from "prop-types";
import styles from "./styles/style";
import { Avatar, Box, Tooltip } from "@mui/material";
import { useState } from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { useAppStore } from "@/hooks/useAppStore";
import { ExpandMore } from "@mui/icons-material";
import SettingsSuggestIcon from "@mui/icons-material/SettingsSuggest";

const HNavbar = ({ open, handleDrawerOpen, appBarStyles, toolBarStyles }) => {
  const theme = useTheme();
  const [anchorEl, setAnchorEl] = useState(null);
  const [themeAnchorEl, setThemeAnchorEl] = useState(null);

  const { user } = useAppStore();

  const openAvatar = Boolean(anchorEl);

  const openTheme = Boolean(themeAnchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleThemeClick = (event) => {
    setThemeAnchorEl(event.currentTarget);
  };

  const handleThemeClose = () => {
    setThemeAnchorEl(null);
  };

  return (
    <AppBar
      position="fixed"
      open={open}
      sx={appBarStyles ? appBarStyles : styles.appbar(theme, open)}
    >
      <Toolbar sx={toolBarStyles ? toolBarStyles : { width: "100%" }}>
        <Box sx={styles.toolbar()}>
          <Box sx={{ display: "flex", alignItems: "center" }}>
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
          </Box>
          <Box display={"flex"} alignItems={"center"}>
            <Box>
              <Tooltip title="Themes">
                <Button
                  id="theme"
                  aria-controls={openTheme ? "theme-menu" : undefined}
                  aria-haspopup="true"
                  aria-expanded={openTheme ? "true" : undefined}
                  onClick={handleThemeClick}
                  sx={{ color: theme.palette.primary.light }}
                >
                  <SettingsSuggestIcon />
                </Button>
              </Tooltip>
              <Menu
                id="theme-menu"
                anchorEl={themeAnchorEl}
                open={openTheme}
                onClick={handleThemeClose}
                MenuListProps={{
                  "aria-labelledby": "theme",
                }}
              >
                <MenuItem onClick={handleThemeClose}>Teal - Default</MenuItem>
                <MenuItem onClick={handleThemeClose}>Holy</MenuItem>
                <MenuItem onClick={handleThemeClose}>Aqua Marine</MenuItem>
                <MenuItem onClick={handleThemeClose}>CyberPunk</MenuItem>
                <MenuItem onClick={handleThemeClose}>Elegant</MenuItem>
                <MenuItem onClick={handleThemeClose}>Garnet</MenuItem>
              </Menu>
            </Box>
            <Box>
              <Button
                id="avatar"
                aria-controls={openAvatar ? "avatar-menu" : undefined}
                aria-haspopup="true"
                aria-expanded={openAvatar ? "true" : undefined}
                onClick={handleClick}
                sx={{ color: theme.palette.primary.light }}
              >
                <Avatar
                  alt="Sina Postacı"
                  sx={{ backgroundColor: theme.palette.primary.light }}
                />
                <Typography
                  color={"white"}
                  fontSize={10}
                  textTransform={"initial"}
                  sx={{ ml: 2 }}
                >
                  {user.email}
                </Typography>
                <ExpandMore sx={{ height: "1.2rem" }} />
              </Button>
              <Menu
                id="avatar-menu"
                anchorEl={anchorEl}
                open={openAvatar}
                onClose={handleClose}
                MenuListProps={{
                  "aria-labelledby": "avatar",
                }}
              >
                <MenuItem onClick={handleClose}>Profile</MenuItem>
                <MenuItem onClick={handleClose}>My account</MenuItem>
                <MenuItem onClick={handleClose}>Logout</MenuItem>
              </Menu>
            </Box>
          </Box>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

HNavbar.propTypes = {
  open: PropTypes.bool,
  handleDrawerOpen: PropTypes.func,
  appBarStyles: PropTypes.object,
  toolBarStyles: PropTypes.object,
};
export default HNavbar;
