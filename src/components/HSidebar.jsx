import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import PropTypes from "prop-types";

const HSidebar = ({ open, handleDrawerClose }) => {
  const theme = useTheme();
  return (
    <Drawer
      sx={styles.drawer(theme)}
      variant="persistent"
      anchor="left"
      open={open}
    >
      <Box sx={styles.drawerHeader}>
        <IconButton onClick={handleDrawerClose}>
          {theme.direction === "ltr" ? (
            <ChevronLeftIcon />
          ) : (
            <ChevronRightIcon />
          )}
        </IconButton>
      </Box>
      <Divider />
      <List>
        {["Inbox", "Starred", "Send email", "Drafts"].map((text, index) => (
          <ListItem key={text} disablePadding sx={styles.listItem}>
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Drawer>
  );
};
const styles = {
  drawer: (theme) => ({
    width: {
      xs: "100%",
      md: 250,
    },
    flexShrink: 0,
    "& .MuiDrawer-paper": {
      width: {
        xs: "100%",
        md: 250,
      },
      color: "white",
      boxSizing: "border-box",
      backgroundColor: theme.palette.primary.dark,
    },
    mt: 0,
  }),
  listItem: (theme) => ({
    transitionTimingFunction: "linear",
    transitionDuration: "0.1s",
    "&:hover": {
      backgroundColor: theme.palette.primary.light,
      color: "black",
    },
  }),
  drawerHeader: () => ({
    height: 65,
  }),
};

HSidebar.propTypes = {
  open: PropTypes.bool,
  handleDrawerClose: PropTypes.func,
};

export default HSidebar;
