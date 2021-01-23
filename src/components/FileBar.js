import React from 'react';
import { Box, makeStyles, Button } from '@material-ui/core';
import { useSelector } from 'react-redux';
import { selectPlaybackStatus } from '../store/appSessionSlice';

import Logo from './../assets/images/logo.png';


const useStyles = makeStyles(theme => ({
  button: {
    color: '#fff'
  },
  logo: {
    width: 154,
    backgroundRepeat: 'no-repeat'

  }
}));


const LogoStyle = {
  backgroundImage: 'url(' + Logo + ')'
};



const FileBar = () => {

  const classes = useStyles();
  const playbackStatus = useSelector(selectPlaybackStatus);


  const handleClick = label => e => {
    console.log(label);
  }

  return (
    <Box display='flex' alignItems='center' justifyContent="center">

      <div className={classes.logo} style={LogoStyle} />
      <Button className={classes.button} onClick={handleClick('file')}>File</Button>
      <Button className={classes.button} onClick={handleClick('about')}>About</Button>

    </Box>
  )

}


export default FileBar;