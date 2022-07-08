import * as React from "react";
import { styled, createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import MuiDrawer from "@mui/material/Drawer";
import Box from "@mui/material/Box";
import MuiAppBar, { AppBarProps as MuiAppBarProps } from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import Badge from "@mui/material/Badge";
import Container from "@mui/material/Container";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import NotificationsIcon from "@mui/icons-material/Notifications";
import Copyright from "../Copyright";
import { Navigate, Outlet } from "react-router-dom";
import { indigo, red } from "@mui/material/colors";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import { toggleTheme } from "../../features/themeSlice";
import { Avatar, Menu, MenuItem, Tooltip } from "@mui/material";
import SidebarItem from "./SidebarItem";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, logout } from "../../services/firebase";

const drawerWidth: number = 240;

interface AppBarProps extends MuiAppBarProps {
  open?: boolean;
}

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})<AppBarProps>(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  "& .MuiDrawer-paper": {
    position: "relative",
    whiteSpace: "nowrap",
    width: drawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
    boxSizing: "border-box",
    ...(!open && {
      overflowX: "hidden",
      transition: theme.transitions.create("width", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      width: theme.spacing(7),
      [theme.breakpoints.up("sm")]: {
        width: theme.spacing(9),
      },
    }),
  },
}));

const settings = ["Profile", "Account", "Dashboard"];

function Admin() {
  const dispatch = useAppDispatch();
  const { mode } = useAppSelector((state) => state.theme);

  const [open, setOpen] = React.useState(true);
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(
    null
  );

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

  const colorMode = (): void => {
    dispatch(toggleTheme());
  };

  const toggleDrawer = () => {
    setOpen(!open);
  };

  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const [user, loading] = useAuthState(auth);
  if (!user) {
    return <Navigate to="/login" replace />;
  }
  return (
    <ThemeProvider theme={mdTheme}>
      {!loading && (
        <Box sx={{ display: "flex" }}>
          <CssBaseline />
          <AppBar position="absolute" open={open}>
            <Toolbar
              sx={{
                pr: "24px", // keep right padding when drawer closed
              }}
            >
              <IconButton
                edge="start"
                color="inherit"
                aria-label="open drawer"
                onClick={toggleDrawer}
                sx={{
                  marginRight: "36px",
                  ...(open && { display: "none" }),
                }}
              >
                <MenuIcon />
              </IconButton>
              <Typography
                component="h1"
                variant="h6"
                color="inherit"
                noWrap
                sx={{ flexGrow: 1 }}
              >
                {/* {state ? state : "Dashboard"} */}
              </Typography>
              <IconButton sx={{ ml: 1 }} onClick={colorMode} color="inherit">
                {mdTheme.palette.mode === "dark" ? (
                  <Brightness7Icon />
                ) : (
                  <Brightness4Icon />
                )}
              </IconButton>
              <IconButton color="inherit">
                <Badge badgeContent={4} color="secondary">
                  <NotificationsIcon />
                </Badge>
              </IconButton>
              <Box sx={{ flexGrow: 0, pl: 2 }}>
                <Tooltip title="Open settings">
                  <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                    {user && (
                      <Avatar
                        alt={user.displayName?.toString()}
                        src={user?.photoURL?.toString()}
                      />
                    )}
                  </IconButton>
                </Tooltip>
                <Menu
                  sx={{ mt: "45px" }}
                  id="menu-appbar"
                  anchorEl={anchorElUser}
                  anchorOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  open={Boolean(anchorElUser)}
                  onClose={handleCloseUserMenu}
                >
                  {settings.map((setting) => (
                    <MenuItem key={setting} onClick={handleCloseUserMenu}>
                      <Typography textAlign="center">{setting}</Typography>
                    </MenuItem>
                  ))}
                  <MenuItem onClick={() => logout()}>
                    <Typography textAlign="center">Logout</Typography>
                  </MenuItem>
                </Menu>
              </Box>
            </Toolbar>
          </AppBar>
          <Drawer variant="permanent" open={open}>
            <Toolbar
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "flex-end",
                px: [1],
              }}
            >
              <IconButton onClick={toggleDrawer}>
                <ChevronLeftIcon />
              </IconButton>
            </Toolbar>
            <Divider />
            {/* Side bar Navigation */}
            <List component="nav">
              <SidebarItem />
            </List>
          </Drawer>
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
      )}
    </ThemeProvider>
  );
}

export default Admin;
