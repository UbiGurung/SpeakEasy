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
  const { classes, form, handleSubmit, handleChange } = props;
  return (
    <div className={classes.root}>
      <FormControl>
        <Typography>create new room</Typography>
        <TextField
          id="outlined-basic"
          label="title"
          variant="outlined"
          error={form.titleError}
          helperText={form.titleError}
          onChange={e => handleChange(e, "title")}
        />
        <div>
          <Button
            className={classes.createRoomButton}
            variant="outlined"
            onClick={() => handleSubmit(true)}
          >
            start room now
          </Button>
        </div>
      </FormControl>
    </div>
  );
};

export default withStyles(styles)(CreateRoomForm);
