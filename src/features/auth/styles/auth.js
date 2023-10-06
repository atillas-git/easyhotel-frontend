/* eslint-disable no-unused-vars */
export const auth = {
  authContainer: (theme) => ({
    flexGrow: 1,
    height: "100vh",
  }),
  authRow: (theme) => ({
    height: "100%",
  }),
  authBackground: (theme) => ({
    flexGrow: 1,
    width: "100%",
    padding: "1rem",
    height: "100%",
    gap:2,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    textAlign:"center",
    backgroundColor: theme.palette.primary.contrastText,
    color: "white",
    "& svg":{
      fontSize:"15rem"
    }
  }),
  authForm: (theme) => ({
    padding: {
      sm: "0",
      md: "1rem",
    },
    width: {
      sm: "100%",
      md: "50%",
    },
    display: "flex",
    flexDirection: "column",
    gap:1.2,
    borderRadius: "1rem",
    textAlign: "center",
  }),
  authCol: (theme) => ({
    flexGrow: 1,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    height: "100%",
    color:theme.palette.primary.dark
  }),
  authInput: (theme) => ({
    marginTop: "0.8rem",
    width: "100%",
  }),
  authButton: (theme) => ({
    color: "white",
  }),
  typographyHeading: (theme) => ({
    mb: 2,
  }),
  headingDrawer: (theme) => ({
    borderColor: "white",
    borderWidth: "0.1rem",
    width: "70%",
  }),
  headingCaption: (theme) => ({
    textAlign: "center",
  }),
};
