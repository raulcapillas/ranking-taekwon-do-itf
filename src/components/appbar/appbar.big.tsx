import * as React from "react";
import { Link } from "react-router-dom";
import { switchRoutes } from "../../components/routing/routes";
import {
  Box,
  IconButton,
  Button,
} from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import { Pages } from "../../constants";

export const AppBarBig: React.FC = () => {
  return (
    <>
      <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
        <IconButton color="inherit" component={Link} to={switchRoutes.main}>
          <HomeIcon />
        </IconButton>
        {Pages.map((page, index) => (
          <Button
            key={`app-bar-big-${index}`}
            component={Link}
            to={page.url}
            sx={{ my: 2, color: "white", display: "block" }}
          >
            {page.name}
          </Button>
        ))}
        <Button
          key={`app-bar-big-main-url`}
          component="a"
          target="_blank"
          href="https://www.taekwondoitf.es"
          sx={{ my: 2, color: "white", display: "block" }}
        >
          {`taekwondoitf.es`}
        </Button>
      </Box>
    </>
  );
};