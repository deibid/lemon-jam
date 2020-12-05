import React from 'react';
import { useState } from 'react';
import { makeStyles, Button, Container, Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@material-ui/core'


function MusicGrid() {

  const [columns, setColumns] = useState(4);
  const [rows, setRows] = useState(4);


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
      row.push(<Bar key={`${i}${j}`} clickListener={handleBarClick} id={`${i}${j}`} />)
    }
    gridItems.push(<TableRow> {row}</TableRow>);
  }


  return (

    <React.Fragment>
      <TableContainer>
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



const barStyles = makeStyles({
  root: {
    backgroundColor: "#A5ABBC"
  }
});

function Bar(props) {

  const classes = barStyles();
  return (
    <TableCell className={classes.root} onClick={props.clickListener} id={props.id}>
      <Typography variant="body2">C Major</Typography>
    </TableCell>
  )

}


export default MusicGrid;