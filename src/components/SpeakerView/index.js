import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import CreateRoomForm from "./";
import RoomHistory from "./";
import RoomTemplates from "./";

const useStyles = makeStyles(theme => ({
  root: {}
}));

function SpeakerView() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CreateRoomForm />
      <RoomTemplates />
      <RoomHistory />
    </div>
  );
}

export default SpeakerView;
