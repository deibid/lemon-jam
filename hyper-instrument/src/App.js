
import { getScaleName } from './utils/MusicTheory';
import Home from './components/Home';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    padding: 0
  }
});


getScaleName();

function App() {

  const classes = useStyles();

  return (
    <div className={classes.root}>

      <Home />

    </div>
  );
}

export default App;
