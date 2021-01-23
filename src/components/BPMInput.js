
import React, { useEffect, useState } from 'react';

import { Typography, Container, Button, makeStyles, Grid, Input, Slider, Box } from '@material-ui/core';

import { GraySlider } from './Slider';
import InputBackground from './InputBackground';
import { useDispatch, useSelector } from 'react-redux';
import { selectBPM, changeBPM } from '../store/appSessionSlice';


const useStyles = makeStyles(theme => ({
  value: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    background: theme.palette.common.lightBlue,
    width: 48,
    height: 40,
    borderRadius: 3,
    marginLeft: theme.spacing(1),
    color: '#fff'
  },
  slider: {
    marginLeft: theme.spacing(1)
  },
  title: {
    color: '#fff'
  }
}));

const BPMInput = (props) => {


  const classes = useStyles();
  const dispatch = useDispatch();

  const bpm = useSelector(selectBPM);

  const handleChange = (event, value) => {
    dispatch(changeBPM({ data: value }));
  };


  return (
    <div className={classes.root}>

      <Typography variant='h5' className={classes.title}>BPM</Typography>
      <InputBackground>

        <GraySlider value={bpm} min={40} max={220} onChange={handleChange} className={classes.slider} />
        <div className={classes.value}>
          <Typography variant='body2'>{bpm}</Typography>
        </div>
      </InputBackground>
    </div>
  );
}

export default BPMInput;