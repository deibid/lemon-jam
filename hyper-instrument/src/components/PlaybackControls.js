import React, { useEffect, useState } from 'react';

import { Typography, Container, Button } from '@material-ui/core';


export default function PlaybackControls(props) {



  const isPlaying = props.isPlaying;
  const label = (isPlaying) ? "Pause" : "Play";

  return (

    <Container>
      <Button onClick={props.handlePlaybackButtonClick} data-id="play-button">{label}</Button>
      <Button onClick={props.handlePlaybackButtonClick} data-id="stop-button">Stop</Button>
    </Container>




  )





}