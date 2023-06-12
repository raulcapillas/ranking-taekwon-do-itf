import axios from "axios";
import { EventITF } from "../constants/types";

interface GAppsScripts {
  umpire: string;
  ranking: string;
}

export const getURLsAppsScripts = async (): Promise<GAppsScripts> =>
  await axios
    .get(`/data/spreadsheatAPI.json`)
    .then((response) => response.data);

export const getFutureEvents = async (): Promise<EventITF[]> => {
  const categories = await getURLsAppsScripts().then(
    (spreadsheat) => spreadsheat.ranking
  );
  return axios
    .get(`${categories}?option=future-events`)
    .then((response) => response.data);
};
