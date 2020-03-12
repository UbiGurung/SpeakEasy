import React from "react";
import { withStyles } from "@material-ui/core/styles";
import CreateRoomForm from "./CreateRoomForm";
import RoomHistory from "./RoomHistory";
import RoomTemplates from "./RoomTemplates";

const styles = {
  root: { textAlign: "center", minHeight: "75vh" }
};

const SpeakerView = props => {
  const { classes, form, createRoom, handleFormChange } = props;

  return (
    <div className={classes.root}>
      <CreateRoomForm
        form={form}
        handleSubmit={createRoom}
        handleChange={handleFormChange}
      />
      <RoomTemplates />
      <RoomHistory />
    </div>
  );
};

export default withStyles(styles)(SpeakerView);
