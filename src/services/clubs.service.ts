import axios from "axios";
import { Club } from "../constants/interfaces";
import { getURLsAppsScripts } from "./main.service";

export const getClubs = async (): Promise<Club[]> => {
  const clubs = await getURLsAppsScripts().then((spreadsheat) => spreadsheat.ranking);
  return axios.get(`${clubs}?option=clubs`).then((response) => response.data);
};

export const getClubInformation = async (name: string): Promise<any[]> => {
  const categories = await getURLsAppsScripts().then((spreadsheat) => spreadsheat.ranking);
  return axios.get(`${categories}?option=clubs&id=${name}`).then((response) => response.data);
};