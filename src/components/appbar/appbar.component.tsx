import * as React from "react";
import { AppBar, Toolbar, Container } from "@mui/material";
import { AppBarBig } from "./appbar.big";
import { AppBarSmall } from "./appbar.small";
import { AppBarSettings } from "./appbar.settings";
import { AppBarLanguage } from "./appbar.language";

export const AppBarLayout: React.FC = () => {
  return (
    <>
      <AppBar position="static">
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <ResponsiveAppBar />
          </Toolbar>
        </Container>
      </AppBar>
    </>
  );
};

const ResponsiveAppBar: React.FC = () => {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null
  );
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(
    null
  );

  const [anchorElLang, setAnchorElLang] = React.useState<null | HTMLElement>(
    null
  );

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleOpenLangMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElLang(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const handleCloseLangMenu = () => {
    setAnchorElLang(null);
  };

  return (
    <>
      <AppBarBig />
      <AppBarSmall
        CloseMenu={handleCloseNavMenu}
        OpenMenu={handleOpenNavMenu}
        AnchorEl={anchorElNav}
      ></AppBarSmall>
      <AppBarSettings
        CloseMenu={handleCloseUserMenu}
        OpenMenu={handleOpenUserMenu}
        AnchorEl={anchorElUser}
      ></AppBarSettings>
      {/* <AppBarLanguage
        CloseMenu={handleCloseLangMenu}
        OpenMenu={handleOpenLangMenu}
        AnchorEl={anchorElLang}
      ></AppBarLanguage> */}
    </>
  );
};
