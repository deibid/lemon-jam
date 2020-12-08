import React, { useEffect } from 'react';
import { useState } from 'react';
import { Container, Typography, Button, Modal } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/Styles';
import * as Tone from 'tone'

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
  const [currentBeat, setCurrentBeat] = useState(1);



  const mainLoop = new Tone.Loop(time => {
    console.log("beat");
    setCurrentBeat(state => state + 1);
  }, "4n");


  const openModal = () => {
    setModalOpen(true);
    console.log('Home, open modal');
  }

  const modalClosed = () => {
    setModalOpen(false);
  }

  const handleBPMChange = (e) => {
    Tone.Transport.bpm.value = e;
    setBPM(e);
  }

  const handlePlaybackChange = (e) => {

    Tone.start();

    switch (e.currentTarget.dataset.id) {
      case "play-button":
        setPlaying(state => !state);
        break;

      case "stop-button":
        setPlaying(false);
        setCurrentBeat(0);
        break;

    }
  }


  useEffect(() => {
    console.log('use effect');
    if (isPlaying) {
      Tone.Transport.start();
      mainLoop.start();
    } else {
      Tone.Transport.pause();
      mainLoop.stop();
    }
  }, [isPlaying]);



  console.log("Render home");

  return (

    <Container maxWidth="lg" className={classes.root}>
      <Typography variant='h1'>Hyper Instrument</Typography>
      <MusicGrid onOpenListener={openModal} currentBeat={currentBeat} />
      {modalOpen && <ScaleInputModal onCloseListener={modalClosed} />}
      <PlaybackControls isPlaying={isPlaying} handlePlaybackButtonClick={handlePlaybackChange} bpm={bpm} onBPMChange={handleBPMChange} />


    </Container>

  )

}

export default Home;