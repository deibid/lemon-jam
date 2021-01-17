
import React, { useEffect, useState } from 'react';

import { Typography, Container, Button, makeStyles, Grid, Input, Slider, Box } from '@material-ui/core';

import { GraySlider } from './Slider';
import InputBackground from './InputBackground';


const useStyles = makeStyles(theme => ({
  root: {
    width: 'fit-content',
    marginTop: 40,
    marginLeft: 40
  },
  input: {
    width: 42,
  },
  subContainer: {
    background: theme.palette.common.primaryBlue,
    borderRadius: 5,
    padding: theme.spacing(1)
  },
  value: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    background: theme.palette.common.accentBlue,
    width: 48,
    height: 40,
    borderRadius: 3,
    marginLeft: theme.spacing(1),
    color: '#fff'
  },
  slider: {
    marginLeft: theme.spacing(1)
  }
}));

const BPMInput = (props) => {


  const classes = useStyles();


  const handleInputChange = (event) => {
    props.onBPMChange(event.target.value === '' ? '' : Number(event.target.value));
  };


  return (
    <div className={classes.root}>

      <InputBackground>

        <Box className={classes.subContainer} display='flex' alignItems='center'>
          <GraySlider className={classes.slider} />

          <div className={classes.value}>
            <Typography variant='body2'>5</Typography>
          </div>

        </Box>
      </InputBackground>
    </div>
  );
}

export default BPMInput;