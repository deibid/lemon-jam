import React from 'react';

import { makeStyles, Box } from '@material-ui/core';
import { ToggleButton, ToggleButtonGroup } from '@material-ui/lab';


import InputBackground from './InputBackground';
import { useDispatch, useSelector } from 'react-redux';
import { KeySignatures_key, selectKeySignature, changeKeySignatureKey, KeySignatures_mode, changeKeySignatureMode } from '../store/appSessionSlice';


const useStyles = makeStyles(theme => ({
  root: {
    '&>*': {
      marginTop: theme.spacing(2)
    }
  },
  toggleGroup: {
    background: theme.palette.common.primaryBlue,
    padding: theme.spacing(.5)
  },
  button: {
    width: theme.spacing(8)
  },
  modeButton: {
    flexGrow: 1
  }
}));

const KeySignatureInput = () => {

  const classes = useStyles();

  const dispatch = useDispatch();
  const keySignature = useSelector(selectKeySignature);


  const handleKeyChange = (event, newValue) => {
    dispatch(changeKeySignatureKey({ data: newValue }));
  }

  const handleModeChange = (event, newValue) => {
    dispatch(changeKeySignatureMode({ data: newValue }));
  }

  return (


    <InputBackground disableSubContainer>

      <Box display='flex' flexDirection='column' className={classes.root}>
        <ToggleButtonGroup className={classes.toggleGroup} onChange={handleKeyChange} value={keySignature.key} exclusive>

          <ToggleButton className={classes.button} value={KeySignatures_key['C']}>C</ToggleButton>
          <ToggleButton className={classes.button} value={KeySignatures_key['C#']}>C#</ToggleButton>
          <ToggleButton className={classes.button} value={KeySignatures_key['D']}>D</ToggleButton>
          <ToggleButton className={classes.button} value={KeySignatures_key['D#']}>D#</ToggleButton>
          <ToggleButton className={classes.button} value={KeySignatures_key['E']}>E</ToggleButton>
          <ToggleButton className={classes.button} value={KeySignatures_key['F']}>F</ToggleButton>

        </ToggleButtonGroup>

        <ToggleButtonGroup className={classes.toggleGroup} onChange={handleKeyChange} value={keySignature.key} exclusive>

          <ToggleButton className={classes.button} value={KeySignatures_key['F#']}>F#</ToggleButton>
          <ToggleButton className={classes.button} value={KeySignatures_key['G']}>G</ToggleButton>
          <ToggleButton className={classes.button} value={KeySignatures_key['G#']}>G#</ToggleButton>
          <ToggleButton className={classes.button} value={KeySignatures_key['A']}>A</ToggleButton>
          <ToggleButton className={classes.button} value={KeySignatures_key['A#']}>A#</ToggleButton>
          <ToggleButton className={classes.button} value={KeySignatures_key['B']}>B</ToggleButton>

        </ToggleButtonGroup>

        <ToggleButtonGroup className={classes.toggleGroup} onChange={handleModeChange} value={keySignature.mode} exclusive>

          <ToggleButton className={classes.modeButton} value={KeySignatures_mode.MAJOR}>Major</ToggleButton>
          <ToggleButton className={classes.modeButton} value={KeySignatures_mode.MINOR}>Minor</ToggleButton>


        </ToggleButtonGroup>
      </Box>

    </InputBackground>
  )


}

export default KeySignatureInput;
