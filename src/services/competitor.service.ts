import axios from "axios";
import { Competitor, CompetitorEvents, CompetitorInformation } from "../constants/interfaces";
import { getURLsAppsScripts } from "./main.service";


export const getCompetitors = async (): Promise<Competitor[]> => {
  const competitors = await getURLsAppsScripts().then((spreadsheat) => spreadsheat.ranking);
  return axios.get(`${competitors}?option=competitors`).then((response) => response.data);
};

export const getCompetitorInformation = async (id: string): Promise<CompetitorInformation> => {
  const competitors = await getURLsAppsScripts().then((spreadsheat) => spreadsheat.ranking);
  return axios.get(`${competitors}?option=competitors&id=${id}`).then((response) => response.data);
};

export const getCompetitorResults = async (id: string): Promise<CompetitorEvents[]> => {
  const competitors = await getURLsAppsScripts().then((spreadsheat) => spreadsheat.ranking);
  return axios.get(`${competitors}?option=competitors&id=${id}&results=1`).then((response) => response.data);
};