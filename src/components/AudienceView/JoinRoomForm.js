import React from "react";
import { withStyles } from "@material-ui/core/styles";
import { FormControl, Typography, TextField, Button } from "@material-ui/core";
import { theme } from "../../config/theme";

const styles = {
  root: {
    margin: "24px"
  },
  joinRoomButton: {
    width: "fit-content",
    alignSelf: "flex-end",
    background: theme.colours.accent
  }
};

const JoinRoomForm = props => {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <FormControl>
        <Typography>enter code to join room</Typography>
        <TextField id="outlined-basic" label="room code" variant="outlined" />
        <Button className={classes.joinRoomButton} variant="outlined">
          >
        </Button>
      </FormControl>
    </div>
  );
};

export default withStyles(styles)(JoinRoomForm);
