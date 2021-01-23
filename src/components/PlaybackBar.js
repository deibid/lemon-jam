import React from 'react';
import { Box, makeStyles } from '@material-ui/core';
import { useSelector } from 'react-redux';
import { selectPlaybackStatus } from '../store/appSessionSlice';

import PlayButton from './PlayButton';
import StopButton from './StopButton';


const PlaybackBar = () => {

  const playbackStatus = useSelector(selectPlaybackStatus);


  return (
    <Box display='flex' alignItems='center' justifyContent="center">
      <StopButton />
      <PlayButton />
    </Box>
  )

}


export default PlaybackBar;