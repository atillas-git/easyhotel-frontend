/* eslint-disable no-unused-vars */
import CircularProgress, {
  circularProgressClasses,
} from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
const Loading = () => {
  return (
    <Box sx={styles.container}>
      <CircularProgress size={40} thickness={4} value={100} />
    </Box>
  );
};
const styles = {
  container: (theme) => ({
    flexGrow: 1,
    width: "100%",
    height: "100%",
  }),
};
export default Loading;
