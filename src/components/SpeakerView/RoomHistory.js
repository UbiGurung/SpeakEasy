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

const RoomHistory = (props) => {
  const { classes, sessionsForUser } = props;

  console.warn({sessionsForUser})

  return (
    <div className={classes.root}>
      <Typography>Rooms you spoke at</Typography>
      <div>
        {sessionsForUser.map(room => (
          <div className={classes.roomHistoryCard} key={room.title}>
            {`${room.title} - ${room.date}`}
          </div>
        ))}
      </div>
    </div>
  );
};

export default withStyles(styles)(RoomHistory);
