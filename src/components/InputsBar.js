import React from 'react';
import { Box, makeStyles, Button } from '@material-ui/core';
import { useSelector, useDispatch } from 'react-redux';
import { changeEditingAttribute, selectPlaybackStatus, Attributes } from '../store/appSessionSlice';


const useStyles = makeStyles(theme => ({
  button: {
    color: '#fff'
  }
}));


const InputsBar = () => {

  const classes = useStyles();
  const dispatch = useDispatch();
  const playbackStatus = useSelector(selectPlaybackStatus);


  const handleClick = label => e => {
    console.log(label);
    dispatch(changeEditingAttribute({ data: label }));
  }



  return (
    <Box display='flex'>

      <Button className={classes.button} onClick={handleClick(Attributes.BPM)}>BPM</Button>
      <Button className={classes.button} onClick={handleClick(Attributes.TIME_SIGNATURE)}>Time Signature</Button>
      <Button className={classes.button} onClick={handleClick(Attributes.KEY_SIGNATURE)}>Key</Button>
    </Box>
  )

}


export default InputsBar;