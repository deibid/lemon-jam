import React from 'react';
import { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Modal, Typography } from '@material-ui/core';



const useStyles = makeStyles((theme) => ({
  paper: {
    position: 'absolute',
    width: '40%',
    backgroundColor: theme.palette.background.paper,
    // border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    top: '30%',
    left: '30%',
  },
}));


export default function ScaleInputModal(props) {

  const classes = useStyles();

  return (
    <Modal
      open={true}
      onClose={props.onCloseListener}>
      <div className={classes.paper}>
        <Typography variant='h4'>Hello Modal</Typography>
      </div>
    </Modal>
  );
}