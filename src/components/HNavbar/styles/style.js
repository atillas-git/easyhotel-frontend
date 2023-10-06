const styles = {
  appbar: (theme, open) => ({
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    ...(open && {
      width: {
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
    boxShadow: "none",
    height: 65,
    display: "flex",
    alignItems: "center",
  }),
  toolbar: (theme) => ({
    color: "white",
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    mr: 2,
    ml: 5,
  }),
  iconButton: (open) => ({
    mr: 2,
    ...(open && { display: "none" }),
  }),
};

export default styles;
