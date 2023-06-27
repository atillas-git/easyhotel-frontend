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
import PropTypes from "prop-types";
import sidebar from "@/config/sidebar";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useState } from "react";

const HSidebar = ({ open, handleDrawerClose }) => {
  const theme = useTheme();
  const [expanded, setExpanded] = useState(false);
  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };
  return (
    <Drawer
      sx={styles.drawer(theme)}
      variant="persistent"
      anchor="left"
      open={open}
    >
      <Box sx={styles.drawerHeader}>
        <IconButton onClick={handleDrawerClose} sx={styles.headerIcon(theme)}>
          {theme.direction === "ltr" ? (
            <ChevronLeftIcon sx={styles.closeIcon()} />
          ) : (
            <ChevronRightIcon sx={styles.closeIcon()} />
          )}
        </IconButton>
      </Box>

      <Divider sx={{ borderColor: theme.palette.primary.light }} />
      <List>
        {sidebar.map((sidebarItem, index) => {
          if (sidebarItem.type === "dropdown") {
            return (
              <ListItem key={sidebarItem.key} sx={styles.listItem(theme)}>
                <ListItemButton sx={styles.listItemButton()}>
                  <Accordion
                    expanded={expanded === `panel${index + 1}`}
                    onChange={handleChange(`panel${index + 1}`)}
                    sx={styles.accordion(theme)}
                  >
                    <AccordionSummary
                      expandIcon={<ExpandMoreIcon />}
                      aria-controls={`panel${index + 1}bh-content`}
                      id={`panel${index + 1}bh-header`}
                      sx={{
                        m: 0,
                        p: 0,
                        "&:hover": { color: theme.palette.primary.dark },
                      }}
                    >
                      <ListItemIcon
                        sx={{ display: "flex", alignItems: "center" }}
                      >
                        {sidebarItem.icon}
                      </ListItemIcon>
                      <Typography>{sidebarItem.label}</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <Typography>
                        Nulla facilisi. Phasellus sollicitudin nulla et quam
                        mattis feugiat. Aliquam eget maximus est, id dignissim
                        quam.
                      </Typography>
                    </AccordionDetails>
                  </Accordion>
                </ListItemButton>
              </ListItem>
            );
          } else {
            return (
              <ListItem key={sidebarItem.key} sx={styles.listItem(theme)}>
                <ListItemButton sx={styles.listItemButton()}>
                  <ListItemIcon>{sidebarItem.icon}</ListItemIcon>
                  <ListItemText>{sidebarItem.label}</ListItemText>
                </ListItemButton>
              </ListItem>
            );
          }
        })}
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
      color: theme.palette.primary.light,
      boxSizing: "border-box",
      backgroundColor: theme.palette.primary.dark,
    },
  }),
  listItem: (theme) => ({
    transitionTimingFunction: "linear",
    transitionDuration: "0.1s",
    padding: "5px",
    "&:hover": {
      backgroundColor: theme.palette.primary.light,
      borderLeft: "5px solid",
      borderColor: theme.palette.primary.main,
      color: theme.palette.primary.dark,
      svg: {
        color: theme.palette.primary.dark,
      },
    },
    svg: {
      color: theme.palette.primary.light,
    },
  }),
  listItemButton: () => ({
    "&:hover": {
      backgroundColor: "unset",
    },
  }),
  drawerHeader: () => ({
    height: 65,
  }),
  headerIcon: (theme) => ({
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: "100%",
    "& svg": {
      color: theme.palette.primary.light,
    },
  }),
  closeIcon: () => ({
    height: "12rem",
  }),
  accordion: (theme) => ({
    backgroundColor: "unset",
    color: theme.palette.primary.light,
    boxShadow: "unset",
    margin: 0,
    padding: 0,
  }),
};

HSidebar.propTypes = {
  open: PropTypes.bool,
  handleDrawerClose: PropTypes.func,
};

export default HSidebar;
