import React from 'react';
import { useState } from 'react';
import { makeStyles, Button, Container, Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@material-ui/core'



const gridStyles = makeStyles((theme) => ({
  root: {
    marginTop: theme.spacing(4),
    maxHeight: "52vh"
  }
}));


function MusicGrid(props) {

  const [columns, setColumns] = useState(8);
  const [rows, setRows] = useState(4);

  const classes = gridStyles();

  const handleButtonClick = (e) => {
    console.log(e);
    setRows(state => state + 1)
  }

  const handleBarClick = (e) => {

    const id = e.target.id;
    console.log('click');
    console.log(id);

  }

  const gridItems = [];

  for (let i = 0; i < rows; i++) {
    let row = [];
    for (let j = 0; j < columns; j++) {
      row.push(<Bar key={`${i}${j}`} clickListener={handleBarClick} id={`${i}${j}`} openModalListener={props.onOpenListener} />)
    }
    gridItems.push(<TableRow> {row}</TableRow>);
  }


  return (

    <React.Fragment>
      <TableContainer className={classes.root}>
        <Table>
          <TableHead>

          </TableHead>
          <TableBody>
            {gridItems}
          </TableBody>
        </Table>
      </TableContainer>

      <Button onClick={handleButtonClick}>Add</Button>
    </React.Fragment>
  )
}


// function Row() {


//   return (

//   )
// }



const barStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "#A5ABBC",
    textAlign: "center",
    border: "1px solid black",
  }
}));

function Bar(props) {

  const classes = barStyles();
  return (
    <TableCell className={classes.root} onClick={props.openModalListener} id={props.id} hover>
      <Typography variant="body2">C Major</Typography>
    </TableCell>
  )

}


export default MusicGrid;