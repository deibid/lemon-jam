import { makeStyles } from '@material-ui/core';



const useStyles = makeStyles(theme => ({
  root: {
    background: theme.palette.common.accentBlue,
    padding: theme.spacing(2),
    borderRadius: 10
  }
}));


const InputBackground = (props) => {

  const classes = useStyles();

  return (
    <div className={classes.root}>
      {props.children}

    </div>
  )

}


export default InputBackground;