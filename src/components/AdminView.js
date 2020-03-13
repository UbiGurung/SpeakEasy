import React from "react";
import { withStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";
import { theme } from "../config/theme";

const styles = {
  root: {
    margin: "24px"
  },
  roomHistoryCard: {
    background: theme.colours.accent,
    margin: "12px"
  }
};

const AdminView = props => {
  const { classes } = props;

  const speakers = [
    { title: "Cirine", date: "20th Jan" },
    { title: "Ubi", date: "23rd Feb" }
  ];

  const rooms = [
    { title: "Ada title", date: "20th Jan" },
    { title: "Introduction", date: "23rd Feb" }
  ];

  return (
    <div className={classes.root}>
      <Typography>speakers</Typography>
      <div>
        {speakers.map(room => (
          <div className={classes.roomHistoryCard} key={room.title}>
            {room.title}
          </div>
        ))}
      </div>
      <Typography>rooms</Typography>
      <div>
        {rooms.map(room => (
          <div className={classes.roomHistoryCard} key={room.title}>
            {room.title}
          </div>
        ))}
      </div>
    </div>
  );
};

export default withStyles(styles)(AdminView);
