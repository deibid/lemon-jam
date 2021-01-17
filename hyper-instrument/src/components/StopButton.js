
import { SvgIcon, makeStyles } from '@material-ui/core';


const useStyles = makeStyles(theme => ({

  root: {
    background: '#3D567E',
    height: 29,
    width: 33
  }
}));


const StopButton = (props) => {

  const classes = useStyles();
  const playbackStatus = props.playbackStatus;


  return (
    <div className={classes.root} >
      <SvgIcon {...props}>

        <svg width="33" height="33" viewBox="0 0 33 33" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M11.3422 12H0.657823C0.304572 11.9862 0.0171034 11.7704 0 11.3422V0.657823C0.0138143 0.303256 0.22958 0.0171034 0.657823 0H11.3422C11.3593 0.000657823 11.3764 0.00131566 11.3935 0.00197348C11.7237 0.0414428 11.9868 0.32036 12 0.657823V11.3422C11.9934 11.5007 11.9776 11.5264 11.95 11.5941C11.8513 11.8323 11.6027 11.9895 11.3422 12Z" fill="white" />
        </svg>

      </SvgIcon>
    </div>
  );

}

export default StopButton;