import React from "react";
import { withStyles } from "@material-ui/core/styles";
import {
  FormControl,
  Typography,
  TextField,
  Button,
  Paper
} from "@material-ui/core";
import { theme } from "../../config/theme";

const styles = {
  root: { margin: "24px" },
  paper: {
    background: theme.colours.background,
    width: "fit-content"
  },
  createRoomButton: {
    width: "fit-content",
    alignSelf: "flex-end",
    background: theme.colours.accent,
    fontWeight: "700",
    color: theme.colours.text
  }
};

const CreateRoomForm = props => {
  const { classes, form, handleSubmit, handleChange } = props;
  return (
    <div className={classes.root}>
      <Paper className={classes.paper} elevation={3}>
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
              onClick={() => handleSubmit(true)}
            >
              start room now
            </Button>
          </div>
        </FormControl>
      </Paper>
    </div>
  );
};

export default withStyles(styles)(CreateRoomForm);
