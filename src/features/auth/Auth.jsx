import { Box, Grid, Typography, useTheme, Divider } from "@mui/material";
import { auth } from "./styles/auth";
import { useState } from "react";
import Login from "./components/Login";
import Register from "./components/Register";
const Auth = () => {
  const theme = useTheme();
  const [showRegister, setShowRegister] = useState(false);
  return (
    <Box sx={auth.authContainer}>
      <Grid sx={auth.authRow} container spacing={0}>
        <Grid item md={6} sx={{ display: { xs: "none", md: "inherit" } }}>
          <Box sx={auth.authBackground(theme)}>
            <Typography variant="h2" sx={auth.typographyHeading}>
              Welcome to EasyHotel
            </Typography>
            <Divider sx={auth.headingDrawer} />
            <Typography variant="body1" mt={3}>
              Best hotel management system ever created !
            </Typography>
            <Typography variant="body2" sx={auth.headingCaption}>
              If you are new, do not worry ! <br />
              EasyHotel is the easiest it gets, and everything is built for your
              own sake !
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12} sm={12} md={6}>
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
