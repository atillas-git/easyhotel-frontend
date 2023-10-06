import { useTheme } from "@mui/material";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { auth } from "./styles/auth";
import { useState } from "react";
import Login from "./components/Login";
import Register from "./components/Register";
import { FaConnectdevelop } from "react-icons/fa";
const Auth = () => {
  const theme = useTheme();
  const [showRegister, setShowRegister] = useState(false);
  return (
    <Box sx={auth.authContainer}>
      <Grid sx={auth.authRow} container spacing={0}>
        <Grid item md={4} sx={{ display: { xs: "none", md: "inherit" } }}>
          <Box sx={auth.authBackground(theme)}>
            <FaConnectdevelop />
            <Typography variant="h4" mt={3} fontWeight={"bold"}>
              EasyHotel
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12} sm={12} md={8}>
          <Box sx={auth.authCol(theme)}>
            {showRegister ? (
              <Register setShowRegister={setShowRegister} />
            ) : (
              <Login setShowRegister={setShowRegister} />
            )}
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Auth;
