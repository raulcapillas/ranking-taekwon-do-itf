import * as React from "react";
import { CompetitorCard } from "./competitor.card";
import {
  CompetitorInformation,
  CompetitorEvents,
} from "../../../constants/interfaces";
import {
  competitorInfoDefault,
  competitorEventsDefault,
} from "../../../constants/default";
import {
  getCompetitorInformation,
  getCompetitorResults,
} from "../../../services/competitor.service";
import { CompetitorTable } from "./competitor.table";
import { format } from "date-fns";

interface CompetitorInformationProps {
  id: string;
}

export const CompetitorInformationContainer: React.FC<
  CompetitorInformationProps
> = ({ id }) => {
  const [competitorInfo, setCompetitorInfo] =
    React.useState<CompetitorInformation>(competitorInfoDefault);

  const [competitorEvents, setCompetitorEvents] = React.useState<
    CompetitorEvents[]
  >(competitorEventsDefault);

  const [total, setTotal] = React.useState<number>(0);

  React.useEffect(() => {
    getCompetitorInformation(id).then((c) => {
      setCompetitorInfo(c);
    });
    getCompetitorResults(id).then((ce) => {
      setCompetitorEvents(
        ce.map((c, index) => ({
          ...c,
          date: format(new Date(c.date), 'dd-MM-yyyy'),
          factor: `${+c.factor * 100}%`,
          id: index + 1,
        }))
      );

      setTotal(ce.reduce((total, c) => total + c.total, 0));
    });
  }, []);

  return (
    <>
      <CompetitorCard
        competitorInfo={competitorInfo}
        total={total}
      ></CompetitorCard>
      <CompetitorTable rows={competitorEvents}></CompetitorTable>
    </>
  );
};