import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import { Hidden, Link, Switch, useTheme } from "@mui/material";
import icon from "./../../Images/icon.png";
import { LoginButton } from "../../Views/Login/LoginButton/LoginButton";
import { LogOutButton } from "../../Views/Login/LogOutButton/LogOutButton";
import { useAuth0 } from "@auth0/auth0-react";
import { selectMode } from "../../Redux/Actions/themeActions";
import { useDispatch } from "react-redux";

const pages = [
  { message: "Notificaciones", route: "/construction" },
  { message: "Publicar aviso", route: "/posteo" },
];
const settings = [
  { message: "Ver Perfil", route: "/profile/" },
  { message: "Mis avisos", route: "/construction" },
  { message: "Configuracion de cuenta", route: "/construction" },
];

export default function NavBar() {
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [anchorElUser, setAnchorElUser] = useState(null);
  const dispatch = useDispatch();
  const theme = useTheme();

  const { isAuthenticated } = useAuth0();

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const switchThemeHandler = () => {
    dispatch(selectMode());
  };

  console.log(theme.palette.primary);
  return (
    <Container maxWidth="xl">
      <AppBar
        sx={{ background: theme.palette.primary.main, padding: 0 }}
        position="fixed"
      >
        <Toolbar>
          <Hidden mdDown>
            <img
              src={icon}
              alt="logo"
              style={{ height: "60px", marginRight: "10px", margin: "1.5%" }}
            />
          </Hidden>
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/home"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
              font: "inherit",
            }}
          >
            Promanitas
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {isAuthenticated &&
                pages.map((page, index) => (
                  <MenuItem key={index} onClick={handleCloseNavMenu}>
                    <Link href={page.route}>
                      <Button color="secondary">{page.message}</Button>
                    </Link>
                  </MenuItem>
                ))}
              {!isAuthenticated && (
                <MenuItem>
                  <Link>
                    <LoginButton />
                  </Link>
                </MenuItem>
              )}
              {!isAuthenticated && (
                <MenuItem>
                  <Link href="/registryForm">
                    <Button color="secondary">Registrarse</Button>
                  </Link>
                </MenuItem>
              )}
            </Menu>
          </Box>
          <Hidden mdUp>
            <img
              src={icon}
              alt="logo"
              style={{ height: "60px", marginRight: "10px", margin: "1.5%" }}
            />
          </Hidden>
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="/home"
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
              font: "inherit",
            }}
          >
            Promanitas
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {isAuthenticated &&
              pages.map((page, index) => (
                <Link href={page.route} key={index}>
                  <Button
                    color="secondary"
                    onClick={handleCloseNavMenu}
                    sx={{ my: 2, display: "block" }}
                  >
                    {page.message}
                  </Button>
                </Link>
              ))}
          </Box>
          {!isAuthenticated && (
            <Box sx={{ flexGrow: 0, display: { xs: "none", md: "flex" } }}>
              <Link sx={{ my: 2, display: "block" }}>
                <LoginButton />
              </Link>
              <Link href="/registryForm">
                <Button sx={{ my: 2, display: "block" }} color="secondary">
                  Registrarse
                </Button>
              </Link>
            </Box>
          )}

          <Switch onClick={switchThemeHandler} color="secondary" />
          <Typography marginRight={"2%"}>Modo Oscuro</Typography>

          <Box sx={{ flexGrow: 0 }}>
            {isAuthenticated && (
              <Tooltip title="Open settings">
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                  <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
                </IconButton>
              </Tooltip>
            )}
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
              {settings.map((setting, index) => (
                <MenuItem key={index} onClick={handleCloseUserMenu}>
                  <Link href={setting.route}>
                    <Button color="secondary">{setting.message}</Button>
                  </Link>
                </MenuItem>
              ))}
              <MenuItem>
                <Link>
                  <LogOutButton />
                </Link>
              </MenuItem>
            </Menu>
          </Box>
        </Toolbar>
      </AppBar>
      <div style={{ paddingTop: "5em" }}></div>
    </Container>
  );
}
