import React, { useEffect } from 'react';
import { useState } from 'react';
import { Container, Typography, Button, Modal, Backdrop, makeStyles } from '@material-ui/core';
import * as Tone from 'tone'
import * as jsonexport from 'jsonexport/dist';

import { scaleNameFromBinaryString } from './../utils/MusicTheory';

import CompositionGrid from './CompositionGrid';
import ScaleInputModal from './ScaleInputModal';
import PlaybackControls from './PlaybackControls';
import { useDispatch, useSelector } from 'react-redux';
import { selectEditingAttribute, changeEditingAttribute, selectBPM, selectKeySignature, selectTimeSignature, selectPlaybackStatus, selectComposition, TimeSignatures } from './../store/appSessionSlice';

import ActionBar from './ActionBar';
import BPMInput from './BPMInput';
import TimeSignatureInput from './TimeSignatureInput';
import KeySignatureInput from './KeySignatureInput';

const useStyles = makeStyles(theme => ({
  root: {
    width: "100%",
    height: "100vh",
    backgroundColor: "#F8FDFF",
    display: "flex",
    flexDirection: "column",
    textAlign: "center",
    padding: theme.spacing(0)
  },
  backdrop: {
    zIndex: theme.zIndex.drawer + 1
  },
  musicGrid: {
    marginTop: theme.spacing(10)
  }
}));


function Home() {

  const classes = useStyles();
  const dispatch = useDispatch();

  const bpm = useSelector(selectBPM);
  const keySignature = useSelector(selectKeySignature);
  const timeSignature = useSelector(selectTimeSignature);
  const playbackStatus = useSelector(selectPlaybackStatus);
  const editingAttribute = useSelector(selectEditingAttribute);

  const backdropOpen = editingAttribute !== '';





  const [modalOpen, setModalOpen] = useState(false);
  const [isPlaying, setPlaying] = useState(false);
  // const [bpm, setBPM] = useState(120);
  const [currentBeat, setCurrentBeat] = useState(1);
  const [scaleMapping, setScaleMapping] = useState({});

  const [editingSlot, setEditingSlot] = useState(-1);
  const [selectedScale, setSelectedScale] = useState('');

  const [copyMode, setCopyMode] = useState(false);
  const [scaleToCopy, setScaleToCopy] = useState('');

  // useEffect(() => {
  //   console.log(scaleMapping)
  // }, [scaleMapping]);

  // const mainLoop = new Tone.Loop(time => {
  //   console.log("beat");
  //   setCurrentBeat(state => state + 1);
  // }, "4n");


  // const openModal = (i) => {


  //   if (!copyMode) {
  //     setModalOpen(true);
  //   }


  //   console.log('Home, open modal');
  //   setEditingSlot(i);

  //   const scale = scaleMapping[i];
  //   setSelectedScale(scale);
  //   console.log(`selected scale   `, scale)


  //   if (copyMode) {
  //     let _scaleToCopy;

  //     if (scaleToCopy !== '') {
  //       setScaleMapping(prev => { return { ...prev, [editingSlot]: scaleToCopy } })
  //       // setScaleToCopy('');
  //     } else {
  //       setScaleToCopy(scale);
  //     }

  //   }




  //   console.log(i)
  // }

  // const modalClosed = (result) => {
  //   setModalOpen(false);
  //   console.log(`result `, result);
  //   const scaleName = scaleNameFromBinaryString(result);

  //   setScaleMapping(prev => { return { ...prev, [editingSlot]: scaleName } })

  // }


  // const exportState = () => {

  //   jsonexport(scaleMapping, function (err, csv) {
  //     if (err) return console.log(err);
  //     var myURL = window.URL || window.webkitURL //window.webkitURL works in Chrome and window.URL works in Firefox
  //     var csv = csv;
  //     var blob = new Blob([csv], { type: 'text/csv' });
  //     var csvUrl = myURL.createObjectURL(blob);
  //     // setFiledownloadlink(csvUrl);
  //     window.location.assign(csvUrl);
  //   });

  // }


  // const handleCopyModeChange = (e) => {

  //   if (copyMode) setScaleToCopy('');
  //   setCopyMode(prev => !prev);



  // }

  // const handleBPMChange = (e) => {
  //   Tone.Transport.bpm.value = e;
  //   setBPM(e);
  // }

  // const handlePlaybackChange = (e) => {

  //   Tone.start();

  //   switch (e.currentTarget.dataset.id) {
  //     case "play-button":
  //       setPlaying(state => !state);
  //       break;

  //     case "stop-button":
  //       setPlaying(false);
  //       setCurrentBeat(0);
  //       break;

  //   }
  // }


  // useEffect(() => {
  //   console.log('use effect');
  //   if (isPlaying) {
  //     Tone.Transport.start();
  //     mainLoop.start();
  //   } else {
  //     Tone.Transport.pause();
  //     mainLoop.stop();
  //   }
  // }, [isPlaying]);



  const handleBackdropClose = e => {
    console.log('backdrop')
    dispatch(changeEditingAttribute({ data: '' }));
  }
  console.log("Render home");

  return (

    <Container maxWidth={false} className={classes.root}>
      <ActionBar />

      <CompositionGrid className={classes.musicGrid} />

      {/* <Typography variant='h1'>Hyper Instrument</Typography>
      <MusicGrid scaleMapping={scaleMapping} onOpenListener={openModal} currentBeat={currentBeat} copyMode={copyMode} />
      {modalOpen && <ScaleInputModal onCloseListener={modalClosed} scale={selectedScale} />}
      <PlaybackControls isPlaying={isPlaying} handlePlaybackButtonClick={handlePlaybackChange} bpm={bpm} onBPMChange={handleBPMChange} />
      <Button onClick={handleCopyModeChange} variant='filled'>{copyMode ? 'Stop Copying' : 'Enter Copy Mode'}</Button>
      <Button onClick={exportState} variant='contained'>Export</Button> */}
      <Backdrop className={classes.backdrop} open={backdropOpen} onClick={handleBackdropClose} />
    </Container>


  )

}

export default Home;