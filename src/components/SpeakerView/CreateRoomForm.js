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

const inputProps = {
  step: 300
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
        <TextField
          id="outlined-basic"
          label="speaker"
          variant="outlined"
          error={form.speakerError}
          helperText={form.speakerError}
          onChange={e => handleChange(e, "speaker")}
        />
        <Typography>aproximately how long</Typography>
        <TextField
          id="time"
          type="time"
          inputProps={inputProps}
          variant="outlined"
          error={form.durationError}
          helperText={form.durationError}
          onChange={e => handleChange(e, "duration")}
        />
        <div>
          <Button variant="outlined" onClick={() => handleSubmit(false)}>
            save for later
          </Button>
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
