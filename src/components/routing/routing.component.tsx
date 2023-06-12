import * as React from "react";
import { Route, Routes } from "react-router-dom";
import { switchRoutes } from "./routes";
import {
  AboutPage,
  CompetitorsPage,
  CategoriesPage,
  MainPage,
  NotFoundPage,
  UmpiresPage,
  ClubsPage,
  EventsPage,
} from "../../pages";
import { MainLayout } from "../../layouts/main.layout";

export const RoutingComponent: React.FC = () => {
  return (
    <>
      <Routes>
        <Route path={switchRoutes.main} element={<MainLayout />}>
          <Route index element={<MainPage />} />
          <Route path={switchRoutes.about} element={<AboutPage />} />
          <Route
            path={switchRoutes.competitors}
            element={<CompetitorsPage />}
          />
          <Route path={switchRoutes.categories} element={<CategoriesPage />} />
          <Route path={switchRoutes.umpires} element={<UmpiresPage />} />
          <Route path={switchRoutes.clubs} element={<ClubsPage />} />
          <Route path={switchRoutes.events} element={<EventsPage />} />
          <Route path={switchRoutes.notFound} element={<NotFoundPage />} />
        </Route>
      </Routes>
    </>
  );
};
