import { createSlice } from '@reduxjs/toolkit';


export const PlaybackStatues = Object.freeze({
  'PLAY': 'play',
  'STOP': 'stop',
  'PAUSE': 'pause'
});

export const TimeSignatures = Object.freeze({
  '3/4': '3/4',
  '4/4': '4/4',
  '6/8': '6/8'
});

export const KeySignatures_key = Object.freeze({
  'C': 'C',
  'C#': 'C#',
  'D': 'D',
  'D#': 'D#',
  'E': 'E',
  'F': 'F',
  'F#': 'F#',
  'G': 'G',
  'G#': 'G#',
  'A': 'A',
  'A#': 'A#',
  'B': 'B'
});

//Ask Zeng about the word 'mode'
export const KeySignatures_mode = Object.freeze({
  'MAJOR': 'major',
  'MINOR': 'minor'
});

export const Attributes = Object.freeze({
  'KEY_SIGNATURE': 'keySignature',
  'TIME_SIGNATURE': 'timeSignature',
  'BPM': 'bpm',
  'COMPOSITION': 'composition'
});


const initialState = {
  playbackStatus: PlaybackStatues.STOP,
  editingAttribute: '',
  bpm: 120,
  timeSignature: TimeSignatures['4/4'],
  keySignature: {
    key: KeySignatures_key.C,
    mode: KeySignatures_mode.MAJOR
  },
  composition: {},
}


export const appSessionSlice = createSlice({
  name: 'appSession',
  initialState,
  reducers: {
    changeEditingAttribute: (state, action) => {
      state.editingAttribute = action.payload.data;
    },
    changeBPM: (state, action) => {
      state.bpm = action.payload.data;
    },
    changeKeySignatureKey: (state, action) => {
      state.keySignature.key = action.payload.data;
    },
    changeKeySignatureMode: (state, action) => {
      state.keySignature.mode = action.payload.data;
    },
    changeTimeSignature: (state, action) => {
      state.timeSignature = action.payload.data;
    },
    changePlaybackStatus: (state, action) => {
      state.playbackStatus = action.payload.data;
    },
    editComposition: (state, action) => {

    }

  }
});


export const {
  changeBPM, changeEditingAttribute, changeKeySignatureKey, changeKeySignatureMode, changeTimeSignature, changePlaybackStatus, editComposition }
  = appSessionSlice.actions;
export default appSessionSlice.reducer;


export const selectEditingAttribute = state => state.appSession.editingAttribute;
export const selectBPM = state => state.appSession.bpm;
export const selectKeySignature = state => state.appSession.keySignature;
export const selectTimeSignature = state => state.appSession.timeSignature;
export const selectPlaybackStatus = state => state.appSession.playbackStatus;
export const selectComposition = state => state.appSession.composition;

//with arguments
// export const selectStation = (state, stationName) => state.currentSession.stations[stationName];
