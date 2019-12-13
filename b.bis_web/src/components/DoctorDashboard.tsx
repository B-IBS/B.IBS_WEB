// @ts-ignore ?????????????????
import React from 'react';
import {
  Paper,
  Typography,
  createStyles,
  makeStyles,
  Grid,
} from '@material-ui/core';
import useDefaultStore from '../context/storeApi';
import Chart from './Chart/chart';

const useStyles = makeStyles((theme) => createStyles({
  paper: {
    padding: theme.spacing(3, 2),
  },
  root: {
    flewGrow: 1,
  },
}));

export default function Test() {
  // @ts-ignore
  const classes = useStyles();
  const { login } = useDefaultStore();

  return (
    <div className={classes.root}>
      <Grid
        container
        spacing={3}
        alignItems="center"
        direction="column"
        justify="center"
        style={{ minHeight: '100vh' }}
      >
        <Grid item xs={12}>
          <Paper className={classes.paper}>
            <Typography variant="h5" component="h3" align="center">
              Patient
              {' '}
              { login }
            </Typography>
            <Typography component="p" variant="h4" align="center">
              Antoine, 21 ans, développeur
            </Typography>
            <Typography component="p" variant="body1">
              Patient depuis 2 ans
            </Typography>
            <Typography component="p" variant="body1">
              Gastroentérologue: Dr. Chiche
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={12}>
          <Typography component="h2" variant="h4" align="center">
            Échelle de douleur des crises sur les 2 derniers mois.
          </Typography>
          <Chart />
        </Grid>
      </Grid>
    </div>
  );
}
