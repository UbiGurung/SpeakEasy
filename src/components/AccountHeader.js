import React from "react";
import { withStyles } from "@material-ui/core/styles";
import { Avatar, Typography } from "@material-ui/core";
import svg from "../static/accountBackdrop.svg";
import { theme } from "../config/theme";

const styles = {
  root: {
    height: "25vh",
    display: "flex",
    alignItems: "center",
    padding: "24px"
    // backgroundImage: `url(${svg})`
  },
  text: {
    color: theme.colours.orange
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
        {props.name}
      </Typography>
    </div>
  );
};

export default withStyles(styles)(AccountHeader);
