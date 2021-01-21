import React from 'react';
import { useState } from 'react';
import { makeStyles, Button, Container, Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Grid } from '@material-ui/core'
import { useSelector } from 'react-redux';
import { selectTimeSignature } from '../store/appSessionSlice';
import MusicGridBlock from './MusicGridBlock';




const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: theme.spacing(4),
    maxHeight: "52vh"
  }
}));


function MusicGrid(props) {

  const timeSignature = useSelector(selectTimeSignature);
  const numerator = timeSignature.split("/")[0];
  const columns = (numerator === '3' || numerator === '6') ? 6 : 8;
  const itemWidth = 12 / columns;

  console.log(columns)

  const musicGridBlocks = [];
  for (let i = 0; i < columns; i++) {
    musicGridBlocks.push(
      <Grid item xs={2}>
        <MusicGridBlock />
      </Grid>
    );
  }

  return (

    <Grid container spacing={2}>
      {musicGridBlocks}
    </Grid>

  )




  // const [columns, setColumns] = useState(8);
  // const [rows, setRows] = useState(4);

  // const currentBeat = props.currentBeat;
  // let currentBar = Math.floor(currentBeat / 4)

  // const classes = gridStyles();

  // const handleButtonClick = (e) => {
  //   console.log(e);
  //   setRows(state => state + 1)
  // }

  // const handleBarClick = (e) => {

  //   e.preventDefault();
  //   const id = e.target.id;

  //   console.log(`which-> ${e.nativeEvent.which}`)
  //   console.log('click');
  //   console.log(id);

  // }

  // const gridItems = [];

  // for (let i = 0; i < rows; i++) {

  //   let row = [];

  //   for (let j = 0; j < columns; j++) {

  //     row.push(
  //       <Bar key={`${i}${j}`}
  //         clickListener={handleBarClick}
  //         id={`${i}${j}`}
  //         openModalListener={props.onOpenListener}
  //         currentBar={currentBar}
  //         thisBar={i * columns + j}
  //         copyMode={props.copyMode}
  //         text={props.scaleMapping[i * columns + j] || ""} />
  //     )

  //   }
  //   gridItems.push(<TableRow> {row}</TableRow>);
  // }


  // return (

  //   <React.Fragment>
  //     <TableContainer className={classes.root}>
  //       <Table>
  //         <TableHead>

  //         </TableHead>
  //         <TableBody>
  //           {gridItems}
  //         </TableBody>
  //       </Table>
  //     </TableContainer>

  //     <Button onClick={handleButtonClick}>Add</Button>
  //   </React.Fragment>
  // )
}



const barStyles = makeStyles({
  root: {
    backgroundColor: props => {
      let color = props.currentBar === props.thisBar ? "#CECECE" : "#A5ABBC";
      if (props.copyMode) color = '#EDA15D';
      return color;
    },
    textAlign: "center",
    border: "1px solid black",
    width: 150,
    height: 80,
    padding: 0
  }
});

function Bar(props) {

  // console.log(`Bar props: currentBar ${props.currentBar} - thisBar ${props.thisBar}`);

  const classes = barStyles(props);
  return (
    <TableCell className={classes.root} onClick={() => props.openModalListener(props.thisBar)} id={props.thisBar}>
      <Typography variant="body2">{props.text}</Typography>
    </TableCell>
  )

}


export default MusicGrid;