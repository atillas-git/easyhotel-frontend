const styles = {
  main: () => ({
    flexGrow: 1,
    display: "flex",
    flexDirection: "column",
    gap: 2,
    p: 2,
  }),
  heading: () => ({
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  }),
  headingButton: () => ({
    color: "primary.light",
    fontWeight: "bold",
    boxShadow: "none",
    display: "flex",
    alignItems: "center",
  }),
  drawerContainer: () => ({
    width: 500,
    p: 1,
    display: "flex",
    flexDirection: "column",
    height: "100%",
  }),
  drawerHeader: () => ({
    p: 2,
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  }),
};
export default styles;
