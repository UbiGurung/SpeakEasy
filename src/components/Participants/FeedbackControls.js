import React from 'react';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import { makeStyles } from '@material-ui/core/styles';

import {Link} from 'react-router-dom';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));

export default function FeedbackControls({props, handleSubmitVote}) {


  const classes = useStyles();
  return (
    <div className={classes.root}>
      <ButtonGroup variant="text" color="primary" aria-label="text primary button group">
        <Button component={Link} to="/todo">Go to todos</Button>
        <Button onClick={props.createSession}>Create Sessions</Button>
        <Button onClick={handleSubmitVote}>Sumbit Vote Test</Button>
      </ButtonGroup>
    </div>
  );
}