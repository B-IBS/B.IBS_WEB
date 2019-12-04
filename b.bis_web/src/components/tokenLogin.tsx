import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';

const useStyles = makeStyles((theme) => createStyles({
  root: {
    height: '100vh',
  },
  image: {
    backgroundImage: 'url(./LOGO_BIBS_01.svg)',
    backgroundRepeat: 'no-repeat',
    backgroundColor:
            theme.palette.type === 'dark' ? theme.palette.grey[900] : theme.palette.grey[50],
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },
  imageIcon: {
    height: '15%',
    width: '15%',
  },
  paper: {
    margin: theme.spacing(8, 4),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function SignInSide() {
  const classes = useStyles();

  return (
    <Grid container component="main" className={classes.root}>
      <CssBaseline />
      <Grid item xs={false} sm={4} md={7} className={classes.image} />
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <div className={classes.paper}>
          <Avatar className={classes.imageIcon} src="./LOGO_BIBS_04.svg" alt="B.IBS icon" />
          <Typography component="h1" variant="h5">
                        Entrez votre token
          </Typography>

          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="token"
            label="Token d'identification du patient"
            name="token"
            autoComplete="token"
            autoFocus
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
                            Continuer
          </Button>
        </div>
      </Grid>
    </Grid>
  );
}
