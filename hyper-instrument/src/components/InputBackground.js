import { makeStyles } from '@material-ui/core';



const useStyles = makeStyles(theme => ({
  root: {
    background: theme.palette.common.accentBlue,
    padding: theme.spacing(2),
    borderRadius: 10,
    width: 'fit-content'

  },
  subContainer: {
    background: theme.palette.common.primaryBlue,
    borderRadius: 5,
    padding: theme.spacing(1),
    display: 'flex',
    alignItems: 'center'
  }
}));


const InputBackground = (props) => {

  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.subContainer}>
        {props.children}
      </div>


    </div>
  )

}


export default InputBackground;