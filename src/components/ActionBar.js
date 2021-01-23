import React from 'react';
import { AppBar, Toolbar, makeStyles, Box, Typography, Button, Slide, Paper } from '@material-ui/core';
import PlaybackBar from './PlaybackBar';
import InputsBar from './InputsBar';
import FileBar from './FileBar';
import { useSelector } from 'react-redux';
import { selectEditingAttribute } from '../store/appSessionSlice';

import BPMInput from './BPMInput';
import KeySignatureInput from './KeySignatureInput';
import TimeSignatureInput from './TimeSignatureInput';
import theme from '../theme';



const useStyles = makeStyles(theme => ({
  root: {
    background: theme.palette.common.primaryBlue,
    display: 'flex',
    zIndex: theme.zIndex.drawer + 2
  },
  file: {
    flexBasis: '33%',
    flexGrow: 1
  },
  actions: {
    flexBasis: '33%',
    flexGrow: 1
  },
  inputs: {
    flexBasis: '33%',
    flexGrow: 1
  },
  paper: {
    background: theme.palette.common.primaryBlue,
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    padding: theme.spacing(4)

  }
}));

const ActionBar = () => {

  const classes = useStyles();

  const editingAttribute = useSelector(selectEditingAttribute);
  const backdropOpen = editingAttribute !== '';

  return (
    <AppBar position="sticky" className={classes.root}>
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


      <Slide direction="down" in={backdropOpen} mountOnEnter unmountOnExit>
        <Paper elevation={1} className={classes.paper}>
          <BPMInput />
          <TimeSignatureInput />
          <KeySignatureInput />
        </Paper>
      </Slide>

    </AppBar>
  )
}


export default ActionBar;