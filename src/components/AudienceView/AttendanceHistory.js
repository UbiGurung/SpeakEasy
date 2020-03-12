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

const AttendanceHistory = props => {
  const { classes } = props;

  const roomsHistory = [
    { title: "ADA speech", date: "20th Jan" },
    { title: "Pep talk", date: "23rd Feb" }
  ];

  return (
    <div className={classes.root}>
      <Typography>rooms you attended</Typography>
      <div>
        {roomsHistory.map(room => (
          <div className={classes.roomHistoryCard}>
            {room.title} - {room.date}
          </div>
        ))}
      </div>
    </div>
  );
};

export default withStyles(styles)(AttendanceHistory);
