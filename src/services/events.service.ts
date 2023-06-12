import axios from "axios";
import { getURLsAppsScripts } from "./main.service";
import { Event, EventClub, EventInformation } from "../constants/interfaces";

export const getEvents = async (): Promise<Event[]> => {
  const clubs = await getURLsAppsScripts().then(
    (spreadsheat) => spreadsheat.ranking
  );
  return axios.get(`${clubs}?option=events`).then((response) => response.data);
};

export const getEventInformation = async (id: string): Promise<EventInformation[]> => {
  const categories = await getURLsAppsScripts().then(
    (spreadsheat) => spreadsheat.ranking
  );
  return axios
    .get(`${categories}?option=events&id=${id}`)
    .then((response) => response.data);
};

export const getEventClubs = async (id: string): Promise<EventClub[]> => {
  const categories = await getURLsAppsScripts().then(
    (spreadsheat) => spreadsheat.ranking
  );
  return axios
    .get(`${categories}?option=events&id=${id}&type=club`)
    .then((response) => response.data);
};
