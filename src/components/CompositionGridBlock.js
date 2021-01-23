import { makeStyles, Typography, Box } from '@material-ui/core';


const useStyles = makeStyles(theme => ({
  root: {
    background: '#fff',
    border: '3px solid #D0D0D0',
    borderRadius: '50%',
    minHeight: 88,
    minWidth: 88,
    maxHeight: 88,
    maxWidth: 88
  }
}));



const CompositionGridBlock = () => {

  const classes = useStyles();

  return (

    <Box className={classes.root} display='flex' alignItems='center' justifyContent='center' minHeight={112} minWidth={72}>
      <Typography variant='subtitle2'>Ab Major</Typography>
    </Box>


  )

}


export default CompositionGridBlock;