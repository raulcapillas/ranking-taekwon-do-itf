import * as React from "react";
import {
  Grid,
  Card,
  CardContent,
  Typography,
  CardMedia,
  Skeleton,
  TextField,
} from "@mui/material";
import { CompetitorInformation } from "../../../constants/interfaces";
import { CompetitorCardStyles } from "./competitor.card.style";
import { romanize } from '@ionaru/romanize';

export interface information {
  competitorInfo: CompetitorInformation;
  total: number;
}

export const CompetitorCard: React.FunctionComponent<information> = ({
  competitorInfo,
  total,
}) => {
  const classes = CompetitorCardStyles;

  const nameLastname = (n: string, l: string) => {
    const name = n ? n : 'Nombre';
    const lastname = l ? l : 'Apellidos';

    return `${name} ${lastname}`;
  };

  const club = (c: string) => {
    const club = c ? c : 'Club';

    return `${club}`;
  };

  const transformDegree = (degree: string) => {
    const numberDegree = degree.substring(
      degree.indexOf("-") + 1,
      degree.lastIndexOf("-")
    );

    const romDan: string = numberDegree ? `${romanize(parseInt(numberDegree))}` : '-';

    return `${romDan} DAN`;
  };

  return (
    <>
      <Grid id="grid-competitor-card" item md={12} sx={classes.fex}>
        <Card id="card-competitor-card" sx={classes.card}>
          <div>
            <CardContent>
              <Typography component="h2" variant="h5">
                {nameLastname(competitorInfo.name, competitorInfo.lastname)}
              </Typography>
              <Typography variant="subtitle1" color="primary">
                {club(competitorInfo.club)}
              </Typography>
              <Typography variant="subtitle1" color="textPrimary">
                {transformDegree(competitorInfo.gradeNo)}
              </Typography>
              <Typography variant="subtitle1" color="textPrimary" sx={classes.total}>
                <TextField
                  id="outlined-read-only-input"
                  label="Puntos totales"
                  size="small"
                  color="success"
                  focused
                  defaultValue={total}
                  value={total}
                  InputProps={{
                    readOnly: true,
                  }}
                />
              </Typography>
            </CardContent>
          </div>
          {competitorInfo.photo ? (
            <CardMedia
              sx={classes.cardMedia}
              image={competitorInfo.photo}
              title={`${competitorInfo.name} ${competitorInfo.lastname}`}
            />
          ) : (
            <Skeleton variant="rectangular" width={160} height={220} />
          )}
        </Card>
      </Grid>
    </>
  );
};
