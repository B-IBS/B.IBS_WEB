// @ts-ignore ?????????????????
import React from 'react';
import {
  Paper,
  Typography,
  createStyles,
  makeStyles,
} from '@material-ui/core';
import useDefaultStore from '../context/storeApi';

const useStyles = makeStyles((theme) => createStyles({
  root: {
    padding: theme.spacing(3, 2),
  },
}));

export default function Test() {
  // @ts-ignore
  const classes = useStyles();
  const { login } = useDefaultStore();

  return (
    <Paper className={classes.root}>
      <Typography variant="h5" component="h3">
        Hello
        {' '}
        { login }
      </Typography>
      <Typography component="p">
        Paper can be used to build surface or other elements for your application.
      </Typography>
    </Paper>
  );
}
