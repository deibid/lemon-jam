import teoria from 'teoria';





const getScaleName = (tonic, intervals) => {

  // const note = teoria.note(tonic);
  // const scale = teoria.scale(note, intervals);

  const scale = teoria.note("c3").scale('major').simple();

  console.dir(scale);


}


export { getScaleName };