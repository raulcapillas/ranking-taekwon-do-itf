import * as React from "react";
import { Outlet } from "react-router-dom";
import { FooterLayout, HeaderLayout } from ".";
import { CookieLayout } from "./cookie/cookie.layout";

export const MainLayout: React.FunctionComponent = () => {
  return (
    <>
      <HeaderLayout />
      <Outlet />
      <CookieLayout />
      <FooterLayout/>
    </>
  );
};
