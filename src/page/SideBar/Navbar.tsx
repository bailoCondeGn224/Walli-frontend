import * as React from "react";
import { styled, useTheme, Theme, CSSObject } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MuiDrawer from "@mui/material/Drawer";
import MuiAppBar, { AppBarProps as MuiAppBarProps } from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import CssBaseline from "@mui/material/CssBaseline";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import SettingsIcon from "@mui/icons-material/Settings";

import "./Navbar.css";
import { Avatar, Badge, Collapse } from "@mui/material";
import { IoNotificationsCircleOutline } from "react-icons/io5";
import links from "../../Data/Link";

// import Clients from "../Clients/Clients";
import Engin from "../Engins/Engin";

const drawerWidth = 240;

const openedMixin = (theme: Theme): CSSObject => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme: Theme): CSSObject => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
}));

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
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": {
      ...openedMixin(theme),
      backgroundColor: "rgba(0, 0, 160, 0.70)",
      color: "rgba(0, 0, 0, 0.87)",
    },
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": {
      ...closedMixin(theme),
      backgroundColor: "rgba(0, 0, 160, 0.70)",
      color: "rgba(0, 0, 0, 0.87)",
    },
  }),
}));
const menuId = "primary-search-account-menu";
const Navbar: React.FC = () => {
  const [collapseStates, setCollapseStates] = React.useState<
    Record<number, boolean>
  >({});
  const theme = useTheme();
  const [open, setOpen] = React.useState(true);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const toggleCollapse = (id: number) => {
    setCollapseStates((prevState) => ({
      ...prevState,
      [id]: !prevState[id],
    }));
  };

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        open={open}
        sx={{
          background: "white",
        }}
      >
        <Toolbar
          sx={{
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={handleDrawerOpen}
              edge="start"
              sx={{
                marginRight: 5,
                ...(open && { display: "none" }),
              }}
            >
              <MenuIcon sx={{ color: "black" }} />
            </IconButton>
            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{ color: "black" }}
            >
              Walli Transport
            </Typography>
          </Box>
          <Box
            sx={{ display: { xs: "none", md: "flex" }, alignItems: "center" }}
          >
            <IconButton
              size="large"
              aria-label="show 17 new notifications"
              color="inherit"
            >
              <Badge badgeContent={17} color="error">
                <IoNotificationsCircleOutline
                  style={{
                    color: " rgba(204, 204, 204, 0.8)",
                    width: "40px",
                    height: "40px",
                  }}
                />
              </Badge>
            </IconButton>
            <IconButton
              size="large"
              aria-label="show 4 new mails"
              color="inherit"
            >
              <SettingsIcon
                sx={{
                  color: " rgba(204, 204, 204, 0.8)",
                  width: "40px",
                  height: "40px",
                }}
              />
            </IconButton>
            <IconButton
              size="large"
              edge="end"
              aria-label="account of current user"
              aria-controls={menuId}
              aria-haspopup="true"
              color="inherit"
            >
              <Avatar
                sx={{
                  color: "white",
                  background: "rgba(204, 204, 204, 0.8)",
                  width: "35px",
                  height: "35px",
                }}
              >
                BC
              </Avatar>
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>

      <Drawer variant="permanent" open={open}>
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "rtl" ? (
              <ChevronRightIcon sx={{ color: "white" }} />
            ) : (
              <ChevronLeftIcon sx={{ color: "white" }} />
            )}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List>
          {links.map((link) => (
            <React.Fragment key={link.id}>
              <ListItem disablePadding>
                <ListItemButton
                  sx={{
                    minHeight: 48,
                    justifyContent: open ? "initial" : "center",
                    px: 2.5,
                    color: "#fff",
                  }}
                  onClick={() =>
                    link.children ? toggleCollapse(link.id) : null
                  }
                >
                  <ListItemIcon
                    sx={{
                      minWidth: 0,
                      mr: open ? 3 : "auto",
                      justifyContent: "center",
                      color: "#fff",
                    }}
                  >
                    {link.icon}
                  </ListItemIcon>
                  <ListItemText
                    primary={link.text}
                    sx={{ opacity: open ? 1 : 0 }}
                  />
                  {link.children && (
                    <IconButton
                      sx={{
                        color: "#fff",
                        transition: "transform 0.3s",
                        transform: collapseStates[link.id]
                          ? "rotate(0deg)"
                          : "rotate(-90deg)",
                      }}
                    >
                      <KeyboardArrowDownIcon />
                    </IconButton>
                  )}
                </ListItemButton>
              </ListItem>
              {link.children && (
                <Collapse
                  in={collapseStates[link.id]}
                  timeout="auto"
                  unmountOnExit
                  sx={{ paddingLeft: 0 }}
                >
                  <List component="div" disablePadding>
                    {link.children.map((child) => (
                      <ListItem
                        key={child.id}
                        sx={{ paddingLeft: 1, paddingTop: 0, paddingBottom: 0 }}
                      >
                        <ListItemButton
                          component="a"
                          href={child.link}
                          sx={{ paddingTop: 0, paddingBottom: 0 }}
                        >
                          <ListItemIcon>{child.icon}</ListItemIcon>
                          <ListItemText
                            primary={child.text}
                            sx={{ color: "#fff" }}
                          />
                        </ListItemButton>
                      </ListItem>
                    ))}
                  </List>
                </Collapse>
              )}
            </React.Fragment>
          ))}
        </List>
        <Divider />
      </Drawer>

      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <DrawerHeader />
        {/* <Clients /> */}
        <Engin />
      </Box>
    </Box>
  );
};

export default Navbar;
