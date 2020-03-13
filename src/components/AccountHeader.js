import React from "react";
import { withStyles } from "@material-ui/core/styles";
import { Avatar, Typography } from "@material-ui/core";
import svg from "../static/4.svg";
import { theme } from "../config/theme";

const styles = {
  root: {
    height: "29vh",
    display: "flex",
    alignItems: "center",
    padding: "24px",
    backgroundImage: `url(${svg})`,
    backgroundPosition: "bottom",
    backgroundPositionX: "-9px",
    backgroundSize: "117% 105%"
  },
  text: {
    color: theme.colours.accent
  }
};

const AccountHeader = props => {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <img src="url(./accountBackdrop.svg)" alt="" />
      <Avatar alt="Remy Sharp" className={classes.large}>
        S
      </Avatar>
      <Typography className={classes.text} variant="h4">
        Sir Speaksalot
      </Typography>
    </div>
  );
};

export default withStyles(styles)(AccountHeader);
