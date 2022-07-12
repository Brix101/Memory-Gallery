import * as React from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Container from "@mui/material/Container";
import Copyright from "../components/Copyright";
import { Navigate, Outlet } from "react-router-dom";
import { indigo, red } from "@mui/material/colors";
import { useAppSelector } from "../app/hooks";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../services/firebase";
import AdminAppBar from "../components/adminComponents/AdminAppBar";

function Admin() {
  const { mode } = useAppSelector((state) => state.theme);

  const mdTheme = createTheme({
    palette: {
      mode: mode,
      primary: {
        main: indigo[500],
      },
      secondary: {
        main: red[500],
      },
    },
  });

  const [user] = useAuthState(auth);
  if (!user) {
    return <Navigate to="/login" replace />;
  }

  return (
    <ThemeProvider theme={mdTheme}>
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <AdminAppBar theme={mdTheme} user={user} />
        <Box
          component="main"
          sx={{
            backgroundColor: (theme) =>
              theme.palette.mode === "light"
                ? theme.palette.grey[100]
                : theme.palette.grey[900],
            flexGrow: 1,
            height: "100vh",
            overflow: "auto",
          }}
        >
          <Toolbar />
          <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
            {/* Main */}
            <Outlet />
            <Copyright sx={{ pt: 4 }} />
          </Container>
        </Box>
      </Box>
    </ThemeProvider>
  );
}

export default Admin;
