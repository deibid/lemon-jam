import React from 'react';
import { AppBar, Toolbar, makeStyles, Box, Typography, Button } from '@material-ui/core';
import PlaybackBar from './PlaybackBar';
import InputsBar from './InputsBar';
import FileBar from './FileBar';


const useStyles = makeStyles(theme => ({
  root: {
    background: theme.palette.common.primaryBlue,
    display: 'flex',
  },
  file: {
    flexGrow: 2
  },
  actions: {
    flexGrow: 3
  },
  inputs: {
    flexGrow: 2,
  }
}));

const ActionBar = () => {

  const classes = useStyles();

  return (
    <AppBar position="sticky">
      <Toolbar className={classes.root}>

        <div className={classes.file}>
          <FileBar />
        </div>

        <div className={classes.actions}>
          <PlaybackBar />
        </div>

        <div className={classes.inputs}>
          <InputsBar />
        </div>


      </Toolbar>
      <Box display='flex' height={40} background="#555555">

        {/* File options */}
        {/* Action options */}
        {/* Input options */}
      </Box>

    </AppBar>
  )
}


export default ActionBar;