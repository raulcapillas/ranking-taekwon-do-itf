import axios from "axios";
import { Category, CategoryEvents } from "../constants/interfaces";
import { getURLsAppsScripts } from "./main.service";

export const getCategories = async (): Promise<Category[]> => {
  const categories = await getURLsAppsScripts().then((spreadsheat) => spreadsheat.ranking);
  return axios.get(`${categories}?option=categories`).then((response) => response.data);
};

export const getCategoryEvents = async (id: string): Promise<CategoryEvents[]> => {
  const categories = await getURLsAppsScripts().then((spreadsheat) => spreadsheat.ranking);
  return axios.get(`${categories}?option=categories&id=${id}`).then((response) => response.data);
};