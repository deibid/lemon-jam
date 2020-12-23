import React from 'react';
import { useState } from 'react';
import { makeStyles, Paper, Box, Container, TextField, Modal, Typography, Button } from '@material-ui/core';
import { ToggleButton } from '@material-ui/lab';




const useStyles = makeStyles((theme) => ({
  paper: {
    position: 'absolute',
    width: '40%',
    height: '300px',
    backgroundColor: theme.palette.background.paper,
    // border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    top: '30%',
    left: '30%'
  },
  title: {
    marginBottom: theme.spacing(10)
  },
  button: {
    marginTop: theme.spacing(10)
  }
}));




const notes = 12;
export default function ScaleInputModal(props) {

  const classes = useStyles();
  let slots = [];

  const scale = props.scale;

  const [selected, setSelected] = useState([]);


  const handleSlotChange = name => (e) => {
    console.log(`${name}`);
    console.log(selected);

    let newSelected = selected.slice();
    if (newSelected.includes(name)) {
      newSelected = newSelected.filter(val => val !== name);
    } else {
      newSelected.push(name);
    }

    console.log(newSelected);
    setSelected(newSelected);
  }

  const generateBinaryStringForScale = () => {

    let string = "000000000000";
    selected.forEach((char) => {
      string = replaceCharAtIndex(string, char, '1');
    });

    return string;
  }


  const handleButtonClick = (e) => {
    console.log('save');
    console.log(selected);

    const result = generateBinaryStringForScale();


    props.onCloseListener(result)
  }

  for (let i = 0; i < notes; i++) {
    slots.push(<NoteSlot selected={selected.includes(i)} onChange={handleSlotChange(i)} key={i} />);
  }

  return (
    <Modal
      open={true}
      onClose={props.onCloseListener}>
      <Paper className={classes.paper}>
        <Typography className={classes.title} variant='h3'>Define your scale</Typography>

        <Container>
          <Box display='flex' width='100%' justifyContent='space-evenly'>
            {slots}
          </Box>
        </Container>

        <Button className={classes.button} onClick={handleButtonClick} variant='contained' color='primary'>Save scale</Button>



      </Paper>
    </Modal>
  );
}


const replaceCharAtIndex = (str, idx, char) => {
  return str.replace(/./g, (c, i) => i == idx ? char : c);
}



const useNoteStyles = makeStyles((theme) => ({
  root: {
    width: theme.spacing(3),
    height: theme.spacing(3),
    '&$selected': {
      background: '#1D2225'
    }
  },
  selected: {
    background: '#1D2225'
  }

}));

const NoteSlot = (props) => {

  const classes = useNoteStyles();

  return (
    <ToggleButton classes={{ root: classes.root, selected: classes.selected }} onChange={props.onChange} selected={props.selected} />
  )

}