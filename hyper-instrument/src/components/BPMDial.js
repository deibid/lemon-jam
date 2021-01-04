
import React, { useEffect, useState } from 'react';

import { Typography, Container, Button, makeStyles, Grid, Input, Slider } from '@material-ui/core';


const useStyles = makeStyles({
  root: {
    width: 250,
  },
  input: {
    width: 42,
  },
});

export default function BPMDial(props) {
  const classes = useStyles();
  const bpm = props.bpm;


  const handleInputChange = (event) => {
    props.onBPMChange(event.target.value === '' ? '' : Number(event.target.value));
  };


  return (
    <div className={classes.root}>
      <Typography id="input-slider" gutterBottom>
        BPM
      </Typography>
      <Input
        className={classes.input}
        value={bpm}
        margin="dense"
        onChange={handleInputChange}
        inputProps={{
          step: 1,
          min: 50,
          max: 250,
          type: 'number',
          'aria-labelledby': 'input-slider',
        }}
      />
    </div>
  );
}