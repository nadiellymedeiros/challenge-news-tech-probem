"use client";

import * as React from "react";

import Category from "./Category";

import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Article from "@mui/icons-material/Article";

interface Props {
  window?: () => Window;
}

const drawerWidth = 240;
const navItems = ["Home", "About", "Contact"];

export default function DrawerAppBar(props: Props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        News Tech Pro bem
      </Typography>
      <Divider />

      <List>
        {navItems.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton sx={{ textAlign: "center" }}>
              <ListItemText primary={item} />
            </ListItemButton>
          </ListItem>
        ))}

        <Category />
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex", textDecoration: "none" }}>
      <CssBaseline />
      <AppBar component="nav" position="static" sx={{ bgcolor: "#01579b" }}>
        <Toolbar>
          <Article
            sx={{
              display: { xs: "none", md: "flex" },
              mr: 1,
            }}
          />
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>

          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{
              flexGrow: 1,
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".1rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            News Tech Pro bem
          </Typography>

          <Box
            sx={{
              flexGrow: 1,
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".1rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            <Category />
          </Box>

          <Box
            sx={{
              display: {
                xs: "none",
                md: "flex",
              },
            }}
          >
            <Typography
              variant="h5"
              noWrap
              component="a"
              href="/"
              sx={{
                textDecoration: "none",
                mr: 2,
                display: { xs: "none", sm: "block", fontSize: 14 },
              }}
            >
              Home
            </Typography>

            <Typography
              variant="h5"
              noWrap
              component="a"
              href="/About"
              sx={{
                textDecoration: "none",
                mr: 2,
                display: { xs: "none", sm: "block", fontSize: 14 },
              }}
            >
              About
            </Typography>

            <Typography
              variant="h5"
              noWrap
              component="a"
              href="/Contact"
              sx={{
                textDecoration: "none",
                mr: 2,
                display: { xs: "none", sm: "block", fontSize: 14 },
              }}
            >
              Contact
            </Typography>
          </Box>

          <Article
            sx={{
              display: { xs: "flex", md: "none" },
              mr: 1,
            }}
          />
          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",

              fontSize: 12,
            }}
          >
            News Tech Pro Bem
          </Typography>
        </Toolbar>
      </AppBar>
      <Box component="nav">
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
    </Box>
  );
}
