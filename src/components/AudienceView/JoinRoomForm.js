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
  root: {
    margin: "24px",
    marginTop: "0px",
    display: "inline-grid"
  },
  paper: {
    background: theme.colours.background,
    width: "fit-content",
    padding: "12px"
  },
  joinRoomButton: {
    width: "fit-content",
    alignSelf: "flex-end",
    background: theme.colours.accent,
    fontWeight: "700",
    color: theme.colours.text
  }
};

const JoinRoomForm = props => {
  const { classes, error, handleChange, handleClick } = props;
  return (
    <div className={classes.root}>
      <Paper className={classes.paper} elevation={3}>
        <FormControl>
          <Typography>Enter code to join room</Typography>
          <TextField
            id="outlined-basic"
            variant="outlined"
            error={Boolean(error)}
            helperText={error}
            onChange={handleChange}
          />
          <Button
            className={classes.joinRoomButton}
            variant="contained"
            onClick={() => handleClick()}
          >
            Enter
          </Button>
        </FormControl>
      </Paper>
    </div>
  );
};

export default withStyles(styles)(JoinRoomForm);
