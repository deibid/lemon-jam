import React from 'react';

import { makeStyles, Box } from '@material-ui/core';
import { ToggleButton, ToggleButtonGroup } from '@material-ui/lab';


import InputBackground from './InputBackground';
import { useDispatch, useSelector } from 'react-redux';
import { selectTimeSignature, changeTimeSignature, TimeSignatures } from '../store/appSessionSlice';


const useStyles = makeStyles(theme => ({

  button: {
    margin: theme.spacing(0, 1),
    width: theme.spacing(8)
  }
}));

const TimeSignatureInput = () => {

  const classes = useStyles();

  const dispatch = useDispatch();
  const timeSignature = useSelector(selectTimeSignature);


  const handleChange = (event, newValue) => {
    dispatch(changeTimeSignature({ data: newValue }))
  }
  return (


    <InputBackground>
      <ToggleButtonGroup onChange={handleChange} value={timeSignature} exclusive>


        <ToggleButton className={classes.button} value={TimeSignatures['3/4']}>3/4</ToggleButton>
        <ToggleButton className={classes.button} value={TimeSignatures['4/4']}>4/4</ToggleButton>
        <ToggleButton className={classes.button} value={TimeSignatures['6/8']}>6/8</ToggleButton>


      </ToggleButtonGroup>
    </InputBackground>
  )


}

export default TimeSignatureInput;
