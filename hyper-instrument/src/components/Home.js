import React from 'react';
import { Container, Typography, Button, Modal } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/Styles';

import MusicGrid from './MusicGrid';



const useStyles = makeStyles({
  root: {
    width: "100%",
    height: "100vh",
    backgroundColor: "#cccccc",
    display: "flex",
    flexDirection: "column",
    // justifyContent: "center",
    textAlign: "center"
  }

});


function Home() {

  const classes = useStyles();

  return (

    <Container maxWidth="lg" className={classes.root}>
      <Typography variant='h1'>Title</Typography>
      <Button outlined>Button</Button>

      <MusicGrid />

    </Container>

  )

}

export default Home;