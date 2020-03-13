import React from "react";
import { withStyles } from "@material-ui/core/styles";
import CreateRoomForm from "./CreateRoomForm";
import RoomHistory from "./RoomHistory";

const styles = {
  root: { textAlign: "center", minHeight: "75vh" }
};

const SpeakerView = props => {
  const { classes, form, createRoom, handleFormChange, sessionsForUser } = props;

  return (
    <div className={classes.root}>
      <CreateRoomForm
        form={form}
        handleSubmit={createRoom}
        handleChange={handleFormChange}
      />
      <RoomHistory sessionsForUser={sessionsForUser}/>
    </div>
  );
};

export default withStyles(styles)(SpeakerView);
