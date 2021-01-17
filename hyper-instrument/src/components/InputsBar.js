import React from 'react';
import { Box, makeStyles, Button } from '@material-ui/core';
import { useSelector } from 'react-redux';
import { selectPlaybackStatus } from '../store/appSessionSlice';


const useStyles = makeStyles(theme => ({
  button: {
    color: '#fff'
  }
}));


const InputsBar = () => {

  const classes = useStyles();
  const playbackStatus = useSelector(selectPlaybackStatus);


  const handleClick = label => e => {
    console.log(label);
  }

  return (
    <Box display='flex'>

      <Button className={classes.button} onClick={handleClick('bpm')}>BPM</Button>
      <Button className={classes.button} onClick={handleClick('time')}>Time Signature</Button>
      <Button className={classes.button} onClick={handleClick('key')}>Key</Button>
    </Box>
  )

}


export default InputsBar;