import * as React from "react";
import { Link } from "react-router-dom";
import { switchRoutes } from "../../components/routing/routes";
import {
  Box,
  IconButton,
  Menu,
  Typography,
  MenuItem,
  Link as MUILink
} from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import MenuIcon from "@mui/icons-material/Menu";
import { Pages, menuProps } from '../../constants';

export const AppBarSmall: React.FC<menuProps> = (props: menuProps) => {
  const { CloseMenu, OpenMenu, AnchorEl } = props;

  return (
    <>
      <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
        <IconButton
          size="large"
          aria-label="account of current user"
          aria-controls="menu-appbar"
          aria-haspopup="true"
          onClick={OpenMenu}
          color="inherit"
        >
          <MenuIcon />
        </IconButton>
        <Menu
          id="menu-appbar"
          anchorEl={AnchorEl}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "left",
          }}
          keepMounted
          transformOrigin={{
            vertical: "top",
            horizontal: "left",
          }}
          open={Boolean(AnchorEl)}
          onClose={CloseMenu}
          sx={{
            display: { xs: "block", md: "none" },
          }}
        >
          <IconButton
            size="large"
            color="inherit"
            component={Link}
            to={switchRoutes.main}
            onClick={CloseMenu}
          >
            <HomeIcon />
          </IconButton>

          {Pages.map((page, index) => (
            <MenuItem key={`app-bar-main-small-${index}`} onClick={CloseMenu}>
              <Link to={page.url} style={{ textDecoration: "none" }}>
                <Typography textAlign="center">{page.name}</Typography>
              </Link>
            </MenuItem>
          ))}
          <MenuItem key={`app-bar-small-main-url`} onClick={CloseMenu}>
            <MUILink
              href="https://www.taekwondoitf.es"
              style={{ textDecoration: "none" }}
              target="_blank"
            >
              <Typography textAlign="center">{`taekwondoitf.es`}</Typography>
            </MUILink>
          </MenuItem>
        </Menu>
      </Box>
    </>
  );
};
