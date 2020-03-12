import React from "react";
import { withStyles } from "@material-ui/core/styles";
import { FormControl, Typography, TextField, Button } from "@material-ui/core";
import { theme } from "../../config/theme";

const styles = {
  root: { margin: "24px" },
  createRoomButton: {
    width: "fit-content",
    alignSelf: "flex-end",
    background: theme.colours.accent
  }
};

const CreateRoomForm = props => {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <FormControl>
        <Typography>create new room</Typography>
        <TextField id="outlined-basic" label="room title" variant="outlined" />
        <TextField
          id="outlined-basic"
          label="room speaker"
          variant="outlined"
        />
        <Button className={classes.createRoomButton} variant="outlined">
          >
        </Button>
      </FormControl>
    </div>
  );
};

export default withStyles(styles)(CreateRoomForm);
