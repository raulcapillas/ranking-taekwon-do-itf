import {
  Category,
  Competitor,
  AutoComplete,
  Club,
  Event,
} from "../constants/interfaces";

export const mappingEventsToAutoComplete = (events: Event[]): AutoComplete[] =>
  events
    .sort((a, b) => (b.name > a.name ? -1 : b.name < a.name ? 1 : 0))
    .map((e: Event) => ({
      id: `${e.tournament}`,
      name: `${e.name}`,
    }));

export const mappingClubsToAutoComplete = (clubs: Club[]): AutoComplete[] =>
  clubs
    .sort((a, b) => (b.name > a.name ? -1 : b.name < a.name ? 1 : 0))
    .map((c: Club, index: number) => ({
      id: `${index + 1}`,
      name: `${c.name}`,
    }));

export const mappingCategoriesToAutoComplete = (
  categories: Category[]
): AutoComplete[] =>
  categories.map((c: Category) => ({
    id: c.id.toString(),
    name: `${c.name}`,
  }));

export const mappingCompetitorsToAutoComplete = (
  competitors: Competitor[]
): AutoComplete[] =>
  competitors
    .sort((a, b) => (b.name > a.name ? -1 : b.name < a.name ? 1 : 0))
    .map((c: Competitor) => ({
      id: c.id,
      name: `${c.name} ${c.lastname}`,
    }));
