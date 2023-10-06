import { useEffect } from "react";
import useStore from "./hooks/useStore";
import AppRouter from "./router/AppRouter";
import axios from "axios";
import { ThemeProvider, createTheme } from "@mui/material";
import themes from "./config/themes";

function App() {
  const user = useStore((state) => state.user);
  const logoutClient = useStore((state) => state.logoutClient);
  const isAuthorized = useStore((state) => state.isAuthorized);
  const authorize = useStore((state) => state.authorize);
  const unAuthorize = useStore((state) => state.unAuthorize);
  const selectedTheme = useStore((state) => state.theme);

  useEffect(() => {
    if (user && !isAuthorized) {
      authorizeUser(user);
    }
  }, [user, isAuthorized]);

  const authorizeUser = async (user) => {
    try {
      const { access_token, ...newUser } = { ...user };
      const res = await axios.post(
        "/api/auth/user",
        { ...newUser },
        {
          headers: {
            "x-access-token": access_token,
          },
        }
      );
      authorize();
      return res.data;
    } catch (error) {
      logoutClient();
      unAuthorize();
    }
  };

  const theme = createTheme({
    palette: themes[selectedTheme],
    typography: {
      allVariants: {
        fontFamily: "Inter",
      },
    },
    components: {
      MuiButton: {
        styleOverrides: {
          root: {
            boxShadow: "none",
            "&:hover": {
              boxShadow: "none",
            },
          },
        },
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <AppRouter isAuthorized={isAuthorized} user={user} />
    </ThemeProvider>
  );
}
export default App;
