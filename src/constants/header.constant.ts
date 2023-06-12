import { switchRoutes } from "../components/routing/routes";
import { languages, page } from "./interfaces";

export const Pages: page[] = [
  {
    name: "Competidores",
    url: switchRoutes.competitors,
  },
  {
    name: "Categorías",
    url: switchRoutes.categories,
  },
  {
    name: "Clubs",
    url: switchRoutes.clubs,
  },
  {
    name: "Eventos",
    url: switchRoutes.events,
  },
  {
    name: "Árbitros",
    url: switchRoutes.umpires,
  },
];

export const Settings: page[] = [
  {
    name: "About",
    url: switchRoutes.about,
  },
];

export const Languages: languages[] = [
  {
    name: "Español",
    code: "es",
  },
  {
    name: "English",
    code: "en",
  },
];