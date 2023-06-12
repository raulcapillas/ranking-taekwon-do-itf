import {
  Category,
  Competitor,
  UmpireEvents,
  AutoComplete,
  CompetitorInformation,
  CompetitorEvents,
  CategoryEvents,
} from "./interfaces";

export const umpireEventsDefault: UmpireEvents = {
  spain_last: "",
  spain_current: "",
  barcelona: "",
  benidorm: "",
  malaga: "",
  roquetas: "",
  algeciras: "",
  european_current: "",
  nuc: "",
  iuc: "",
};

export const competitorsDefault: Competitor[] = [
  {
    id: "0",
    licence: "00000",
    name: "Cargando ",
    lastname: "competidores ...",
    birthday: "",
    sex: "u",
    photo: "",
    club: "",
  },
];

export const categoriesDefault: Category[] = [
  {
    id: 0,
    name: "FEST",
    type: "U",
    isteam: "",
  },
];

export const autoCompleteDefault: AutoComplete[] = [
  {
    id: "",
    name: "",
  },
];

export const competitorInfoDefault: CompetitorInformation = {
  id: "0",
  licence: "00000",
  name: "",
  lastname: "",
  birthday: "",
  sex: "u",
  photo: "",
  club: "",
  gradeNo: "",
  annualFeeNo: "",
};

export const competitorEventsDefault: CompetitorEvents[] = [
  {
    id: 0,
    date: "-",
    event: "-",
    type: "-",
    category: "-",
    ranking: 0,
    fights_won: 0,
    factor: '-%',
    total: 0,
  },
];


export const categoryEventsDefault: CategoryEvents[] = [
  {
    id: 0,
    category_name: "-",
    competitor_id: "-",
    competitor_name: "-",
    competitor_lastname: "-",
    photo: "-",
    licence: "-",
    club: "-",
    ranking_event: [
      {
        ranking: 0,
        event: "",
        type: "",
      }
    ],
    total: 0,
  },
];