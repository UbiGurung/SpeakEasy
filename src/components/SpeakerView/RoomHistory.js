import React from "react";
import { withStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";
import { theme } from "../../config/theme";

const styles = {
  root: {
    margin: "24px"
  },
  roomHistoryCard: {
    background: theme.colours.accent,
    margin: "12px"
  }
};

const RoomHistory = props => {
  const { classes } = props;

  const roomHistory = [
    { title: "ADA speech", date: "20th Jan" },
    { title: "Pep talk", date: "23rd Feb" }
  ];

  return (
    <div className={classes.root}>
      <Typography>rooms you spoke at</Typography>
      <div>
        {roomHistory.map(room => (
          <div className={classes.roomHistoryCard} key={room.title}>
            `${room.title} - ${room.date}`
          </div>
        ))}
      </div>
    </div>
  );
};

export default withStyles(styles)(RoomHistory);
