import React, { useEffect, useState } from 'react';
import { Typography, Container, Button, makeStyles } from '@material-ui/core';

import BPMDial from './BPMDial';


const useStyles = makeStyles({
  root: {
    display: "flex",
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: "16px"
  }
});


export default function PlaybackControls(props) {

  const classes = useStyles();

  const isPlaying = props.isPlaying;
  const bpm = props.bpm;
  const label = (isPlaying) ? "Pause" : "Play";

  return (

    <Container className={classes.root}>
      <Button onClick={props.handlePlaybackButtonClick} data-id="stop-button">Stop</Button>
      <Button onClick={props.handlePlaybackButtonClick} data-id="play-button">{label}</Button>
      <BPMDial bpm={bpm} onBPMChange={props.onBPMChange} />

    </Container>

  )
}
