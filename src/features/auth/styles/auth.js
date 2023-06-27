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
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: theme.palette.primary.main,
    color: "white",
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
  }),
  authInput: (theme) => ({
    marginTop: "0.8rem",
    width: "100%",
  }),
  authButton: (theme) => ({
    marginTop: "0.8rem",
    color: "white",
  }),
  typographyHeading: (theme) => ({
    mb: 2,
  }),
  headingDrawer: (theme) => ({
    borderColor: "white",
    borderWidth: 1,
    width: "70%",
  }),
  headingCaption: (theme) => ({
    textAlign: "center",
    marginTop: 10,
  }),
};
