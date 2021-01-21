import teoria from 'teoria';





const getScaleName = (tonic, intervals) => {

  // const note = teoria.note(tonic);
  // const scale = teoria.scale(note, intervals);

  const scale = teoria.note("c3").scale('major').simple();

  console.dir(scale);


}


const scale_name_dict = {
  '101011010101': 'major',
  '101101011001': 'harmonic minor',
  '101010010100': 'major pentatonic',
  '110110110110': 'half-whole',
  '101101010101': 'melodic minor',
};

const pitch_name_dict = {
  '0': 'C',
  '1': 'C#/Db',
  '2': 'D',
  '3': 'D#/Eb',
  '4': 'E',
  '5': 'F',
  '6': 'F#/Gb',
  '7': 'G',
  '8': 'G#/Ab',
  '9': 'A',
  '10': 'A#/Bb',
  '11': 'B',
}

function scaleNameFromBinaryString(binaryString) {

  console.assert(binaryString.length == 12, 'binaryString should be of length 12 but here length is ' + binaryString.length);

  for (let i = 0; i < 12; i++) {
    let rotated_string = binaryString.slice((i) % 12) + binaryString.slice(0, (i) % 12);

    if (rotated_string in scale_name_dict) {
      let tonic = pitch_name_dict[i];
      let scale_type = scale_name_dict[rotated_string];
      let scale_name = tonic + ' ' + scale_type;
      return scale_name
    }
  }
  return ('customized scale: ' + binaryString)
}


export { getScaleName, scaleNameFromBinaryString };