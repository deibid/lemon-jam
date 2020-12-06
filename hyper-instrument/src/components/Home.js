import React from 'react';
import { useState } from 'react';
import { Container, Typography, Button, Modal } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/Styles';

import MusicGrid from './MusicGrid';
import ScaleInputModal from './ScaleInputModal';


const useStyles = makeStyles({
  root: {
    width: "100%",
    height: "100vh",
    backgroundColor: "#fefefe",
    display: "flex",
    flexDirection: "column",
    // justifyContent: "center",
    textAlign: "center"
  }

});


function Home() {

  const classes = useStyles();
  const [modalOpen, setModalOpen] = useState(false);


  const openModal = () => {
    setModalOpen(true);
    console.log('Home, open modal');
  }

  const modalClosed = () => {
    setModalOpen(false);
    console.log('Home, close modal');
  }

  console.log("Render home");

  return (

    <Container maxWidth="lg" className={classes.root}>
      <Typography variant='h1'>Hyper Instrument</Typography>
      <MusicGrid onOpenListener={openModal} />
      {modalOpen && <ScaleInputModal onCloseListener={modalClosed} />}


    </Container>

  )

}

export default Home;