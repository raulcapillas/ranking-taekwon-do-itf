/**
 * HEADERS INTERFACE
 */
export interface page {
  name: string;
  url: string;
}

export interface menuProps {
  CloseMenu: () => void;
  OpenMenu?: (event: React.MouseEvent<HTMLElement>) => void;
  AnchorEl?: null | HTMLElement;
}

export interface languages {
  name: string;
  code: string;
}

/**
 * UMPIRE INTERFACE
 */

export interface Umpire {
  id: number;
  name: string;
  lastName: string;
  degree: string;
  umpire_degree: string;
  school: string;
  photo: string;
  total: number;
  spain_last: number;
  spain_current: number;
  barcelona: number;
  benidorm: number;
  malaga: number;
  roquetas: number;
  algeciras: number;
  european_current: number;
  nuc: number;
  iuc: number;
}

export interface UmpireEvents {
  spain_last: string;
  spain_current: string;
  barcelona: string;
  benidorm: string;
  malaga: string;
  roquetas: string;
  algeciras: string;
  european_current: string;
  nuc: string;
  iuc: string;
}

/**
 * Webservice information
 */
 export interface Members {
  id: number;
  name: string;
  surnames: string;
  gradeNo: string;
  annualFeeNo: string | null;
  birthdate: string;
  school: string;
}

/**
 * COMPETITORS INTERFACE
 */
 export interface Competitor {
  id: string, 
  licence: string,
  name: string,
  lastname: string,
  birthday: string,
  sex: string,
  photo: string,
  club: string,
}

export interface CompetitorInformation extends Competitor {
  gradeNo: string;
  annualFeeNo: string;
}

export interface CompetitorEvents {
  id: number;
  date: string;
  event: string;
  type: string;
  category: string;
  ranking: number;
  fights_won: number;
  factor: string;
  total: number;
}

/**
 * CATEGORIES INTERFACE
 */
 export interface Category {
  id: number;
  name: string;
  type: string;
  isteam: string;
}

interface RankingEvent {
  ranking: number;
  event: string;
  type: string;
}

export interface CategoryEvents {
  id: number;
  category_name: string;
  competitor_id: string;
  competitor_name: string;
  competitor_lastname: string;
  photo: string;
  licence: string;
  club: string;
  ranking_event : RankingEvent[];
  total: number;
}

/**
 * CLUBS INTERFACE
 */
export interface Club {
  name: string;
}

export interface ClubInformation {
  name: string;
  competitor_name: string;
  competitor_lastname: string;
  competitor_license: string;
  competitor_photo: string;
  competitor_birthday: string;
  competitor_sex: string;
  category_name: string;
  category_type: string;
  event_name: string;
  event_type: string;
  event_date: string;
}

/**
 * FILTERS INTERFACE
 */
export interface AutoComplete {
  id: string;
  name: string;
}


/**
 * EVENTS INTERFACE
 */
 export interface Event {
  tournament: string;
  name: string;
  type: string;
  date: string;
}

export interface EventInformation {
  name: string;
  type: string;
  date: string;
  competitor_name: string;
  competitor_lastname: string;
  competitor_photo: string;
  competitor_sex: string;
  competitor_rank: number;
  category_name: string;
  club_name: string;
}

export interface EventClub {
  rank: number;
  club: string;
  place_1: number;
  place_2: number;
  place_3: number
}