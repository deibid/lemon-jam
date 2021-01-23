import { makeStyles } from '@material-ui/core';



const useStyles = makeStyles(theme => ({
  root: {
    background: theme.palette.common.mediumBlue,
    padding: theme.spacing(2),
    borderRadius: 10,
    width: 'fit-content',
    display: 'flex',
    flexDirection: 'column'
  },
  subContainer: {
    background: theme.palette.common.darkBlue,
    borderRadius: 5,
    padding: theme.spacing(1),
    display: 'flex',
    alignItems: 'center'
  }
}));


const InputBackground = (props) => {

  const classes = useStyles();

  const disableSubContainer = props.disableSubContainer;

  return (
    <div className={classes.root}>

      {disableSubContainer ?

        <>
          { props.children}
        </>
        :
        <div className={classes.subContainer}>
          {props.children}
        </div>


      }



    </div>
  )

}


export default InputBackground;