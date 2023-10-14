const styles = {
  main: () => ({
    flexGrow: 1,
    display: "flex",
    flexDirection: "column",
    gap: 2,
    p: 4,  
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
    color:"primary.dark"
  }),
  drawerHeader: () => ({
    p: 2,
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  }),
  drawerListItem:()=>({
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    gap:2,
  }),
  listItemInput:()=>({
    width:"100%",
  }),
  table:()=>({
    width:{
      sm:700,
      md:1555
    }
  })
};
export default styles;
