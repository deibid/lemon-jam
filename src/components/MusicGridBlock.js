import { makeStyles, Typography, Box } from '@material-ui/core';


const useStyles = makeStyles(theme => ({
  root: {
    background: '#fff',
    borderRadius: 10
  }
}));



const MusicGridBlock = () => {

  const classes = useStyles();

  return (

    <Box className={classes.root} display='flex' alignItems='center' justifyContent='center' minHeight={112} minWidth={72}>
      <Typography variant='subtitle2'>Ab Major</Typography>
    </Box>


  )

}


export default MusicGridBlock;