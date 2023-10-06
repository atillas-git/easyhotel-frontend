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
import styles from "./styles/style";
import { Link } from "react-router-dom";

const HSidebar = ({ open, handleDrawerClose }) => {
  const theme = useTheme();
  const [expanded, setExpanded] = useState(true);
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
              <ListItem
                key={sidebarItem.key}
                sx={styles.accordionListItem(theme)}
              >
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
                      sx={styles.accordionSummary()}
                    >
                      <ListItemIcon sx={styles.accordionIcon()}>
                        {sidebarItem.icon}
                      </ListItemIcon>
                      <Typography>{sidebarItem.label}</Typography>
                    </AccordionSummary>
                    <AccordionDetails sx={{ ml: 2, p: 0 }}>
                      <List>
                        {sidebarItem.subItems.map((subItem) => {
                          return (
                            <Link key={subItem.key} to={subItem.route}>                           
                              <ListItem
                                sx={styles.listItem(theme)}
                              >
                                <ListItemButton sx={styles.listItemButton()}>
                                  <ListItemIcon>{subItem.icon}</ListItemIcon>
                                  <ListItemText>{subItem.label}</ListItemText>
                                </ListItemButton>
                              </ListItem>
                            </Link>
                          );
                        })}
                      </List>
                    </AccordionDetails>
                  </Accordion>
                </ListItemButton>
              </ListItem>
            );
          } else {
            return (
              <Link key={sidebarItem.key} to={sidebarItem.route}>              
                <ListItem sx={styles.listItem(theme)}>
                  <ListItemButton sx={styles.listItemButton()}>
                    <ListItemIcon>{sidebarItem.icon}</ListItemIcon>
                    <ListItemText>{sidebarItem.label}</ListItemText>
                  </ListItemButton>
                </ListItem>
              </Link>
            );
          }
        })}
      </List>
      <Box sx={{marginTop:"auto", mb:1, textAlign:"center",display:"flex",flexDirection:"column",gap:1,p:2}}>
        <Typography variant="caption">
          Version: 0.0.1
        </Typography>
        <Typography variant="caption">
          2023 Deltasoft Inc. All Rights Reserved
        </Typography>
      </Box>
    </Drawer>
  );
};

HSidebar.propTypes = {
  open: PropTypes.bool,
  handleDrawerClose: PropTypes.func,
};

export default HSidebar;
