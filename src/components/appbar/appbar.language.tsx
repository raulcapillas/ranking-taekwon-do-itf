import * as React from "react";
import { Box, IconButton, Menu, Typography, MenuItem, Button } from "@mui/material";
import LanguageIcon from "@mui/icons-material/Language";
import { Languages, menuProps } from "../../constants";
import { useTranslation } from "react-i18next";

export const AppBarLanguage: React.FC<menuProps> = (props: menuProps) => {
  const { CloseMenu, OpenMenu, AnchorEl } = props;

  const { i18n } = useTranslation();

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  return (
    <Box sx={{ flexGrow: 0 }}>
      <IconButton onClick={OpenMenu} color="inherit">
        <LanguageIcon />
      </IconButton>
      <Menu
        sx={{ mt: "45px" }}
        id="menu-appbar"
        anchorEl={AnchorEl}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        keepMounted
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        open={Boolean(AnchorEl)}
        onClose={CloseMenu}
      >
        {Languages.map((language, index) => (
          <MenuItem key={`app-bar-setting-${index}`} onClick={CloseMenu}>
            <Button onClick={() => changeLanguage(language.code)}>
              <Typography textAlign="center">{language.name}</Typography>
            </Button>
          </MenuItem>
        ))}
      </Menu>
    </Box>
  );
};
