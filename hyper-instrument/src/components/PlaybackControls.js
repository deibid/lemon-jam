import React, { useEffect, useState } from 'react';
import { Typography, Container, Button, makeStyles } from '@material-ui/core';

import BPMDial from './BPMDial';


export default function PlaybackControls(props) {

  const isPlaying = props.isPlaying;
  const bpm = props.bpm;
  const label = (isPlaying) ? "Pause" : "Play";

  return (

    <Container>
      <Button onClick={props.handlePlaybackButtonClick} data-id="stop-button">Stop</Button>
      <Button onClick={props.handlePlaybackButtonClick} data-id="play-button">{label}</Button>
      <BPMDial bpm={bpm} onBPMChange={props.onBPMChange} />

    </Container>

  )
}
