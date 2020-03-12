import React from "react";
import { withStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";
import { theme } from "../../config/theme";

const styles = {
  root: {
    margin: "24px"
  },
  roomTemplateCard: {
    background: theme.colours.accent,
    margin: "12px"
  }
};

const RoomTemplates = props => {
  const { classes } = props;

  const roomTemplates = [{ title: "ADA speech" }, { title: "Pep talk" }];

  return (
    <div className={classes.root}>
      <Typography>rooms you are planning</Typography>
      <div>
        {roomTemplates.map(room => (
          <div className={classes.roomTemplateCard} key={room.title}>
            {room.title}{" "}
          </div>
        ))}
      </div>
    </div>
  );
};

export default withStyles(styles)(RoomTemplates);
