const styles = {
  drawer: (theme) => ({
    width: {
      xs: "100%",
      md: 300,
    },
    flexShrink: 0,
    "& .MuiDrawer-paper": {
      width: {
        xs: "100%",
        md: 300,
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
    width: "100%",
  }),
  accordionListItem: (theme) => ({
    transitionTimingFunction: "linear",
    transitionDuration: "0.1s",
    padding: "5px",
    svg: {
      color: theme.palette.primary.light,
    },
  }),
  accordionSummary: () => ({
    p: 0,
    m: 0,
  }),
  accordionIcon: () => ({
    display: "flex",
    alignItems: "center",
  }),
};

export default styles;
