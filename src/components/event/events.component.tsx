import * as React from "react";
import {
  Card,
  CardHeader,
  CardMedia,
  CardContent,
  CardActions,
  IconButton,
  Typography,
  Link,
} from "@mui/material";
import PersonAddAltIcon from "@mui/icons-material/PersonAddAlt";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import { EventITF } from "../../constants/types";

export interface FutureEvents {
  event: EventITF;
}

export const EventsComponent: React.FC<FutureEvents> = (
  props: FutureEvents
) => {
  const { event } = props;

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardHeader title={event.title} subheader={event.date} />
      <CardMedia
        component="img"
        height="300"
        image={event.image}
        alt={event.title}
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {event.description}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        {event.web && (
          <IconButton aria-label={`info-${event.title}`}>
            <Link
              href={event.web}
              target="_blank"
              aria-label={`web-${event.title}`}
            >
              <PersonAddAltIcon />
            </Link>
          </IconButton>
        )}
        {event.info && (
          <IconButton aria-label={`info-${event.title}`}>
            <Link
              href={event.info}
              target="_blank"
              aria-label={`web-${event.title}`}
            >
              <InfoOutlinedIcon />
            </Link>
          </IconButton>
        )}
      </CardActions>
    </Card>
  );
};
