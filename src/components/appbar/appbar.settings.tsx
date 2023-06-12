import * as React from "react";
import { Link } from "react-router-dom";
import {
  Box,
  IconButton,
  Menu,
  Typography,
  MenuItem,
} from "@mui/material";
import SettingsIcon from "@mui/icons-material/Settings";
import { Settings, menuProps } from '../../constants';

export const AppBarSettings: React.FC<menuProps> = (props: menuProps) => {
  const { CloseMenu, OpenMenu, AnchorEl } = props;

  return (
    <Box sx={{ flexGrow: 0 }}>
      <IconButton onClick={OpenMenu} color="inherit">
        <SettingsIcon />
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
        {Settings.map((setting, index) => (
          <MenuItem key={`app-bar-setting-${index}`} onClick={CloseMenu}>
            <Link to={setting.url} style={{ textDecoration: "none" }}>
              <Typography textAlign="center">{setting.name}</Typography>
            </Link>
          </MenuItem>
        ))}
      </Menu>
    </Box>
  );
};
