import * as React from "react";
import { CardMedia } from "@mui/material";
import { AppBarLayout } from "../../components";

export const HeaderLayout: React.FC = () => {
  return (
    <>
      <CardMedia
        component="img"
        alt="Ranking TAEKWON-DO ITF ESPAÑA"
        image="assets/header.jpg"
      />
      <AppBarLayout />
    </>
  );
};
