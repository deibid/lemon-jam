import React from 'react';
import { useState } from 'react';
import { Container, Typography, Button, Modal } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/Styles';

import MusicGrid from './MusicGrid';
import ScaleInputModal from './ScaleInputModal';
import PlaybackControls from './PlaybackControls';


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
  const [isPlaying, setPlaying] = useState(false);
  const [bpm, setBPM] = useState(120);


  const openModal = () => {
    setModalOpen(true);
    console.log('Home, open modal');
  }

  const modalClosed = () => {
    setModalOpen(false);
    console.log('Home, close modal');
  }

  const handleBPMChange = (e) => {
    setBPM(e);
  }

  const handlePlaybackChange = (e) => {
    console.log("playing...");



    switch (e.currentTarget.dataset.id) {
      case "play-button":
        setPlaying(state => !state);
        break;

      case "stop-button":
        console.log("stopped");
        break;

    }
  }



  console.log("Render home");

  return (

    <Container maxWidth="lg" className={classes.root}>
      <Typography variant='h1'>Hyper Instrument</Typography>
      <MusicGrid onOpenListener={openModal} />
      {modalOpen && <ScaleInputModal onCloseListener={modalClosed} />}
      <PlaybackControls isPlaying={isPlaying} handlePlaybackButtonClick={handlePlaybackChange} bpm={bpm} onBPMChange={handleBPMChange} />


    </Container>

  )

}

export default Home;