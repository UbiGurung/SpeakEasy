import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  root: {}
}));

function CreateRoomForm() {
  const classes = useStyles();

  return <div className={classes.root}>Create Room Form</div>;
}

export default CreateRoomForm;
