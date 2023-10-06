/* eslint-disable no-unused-vars */
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
const Loading = () => {
  return (
    <Box sx={styles.container}>
      <CircularProgress size={60} thickness={4} value={100} />
    </Box>
  );
};
const styles = {
  container: (theme) => ({
    flexGrow: 1,
    width: "100vw",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    backgroundColor: theme.palette.primary.light,
    height: "100vh",
  }),
};
export default Loading;
