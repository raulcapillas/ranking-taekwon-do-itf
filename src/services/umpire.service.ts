import axios from "axios";
import { Umpire, UmpireEvents } from "../constants/interfaces";
import { getURLsAppsScripts } from "./main.service";

export const getUmpire = async (): Promise<Umpire[]> => {
  const umpire = await getURLsAppsScripts().then((spreadsheat) => spreadsheat.umpire);
  return axios.get(umpire).then((response) => response.data);
};

export const getUmpireEvents = async (): Promise<UmpireEvents[]> => {
  const umpire_events = await getURLsAppsScripts().then((spreadsheat) => spreadsheat.ranking);
  return axios.get(`${umpire_events}?option=umpire_events`).then((response) => response.data);
};
