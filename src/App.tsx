import React from 'react';
import './App.css';
import StepperFrom from './StepperFrom'
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

function App() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
       <Grid container spacing={3}>
        <Grid item xs={12} md={10}>
          <Paper className={classes.paper}><StepperFrom/></Paper>
        </Grid>
        </Grid>
        
    </div>
  );
}

export default App;
