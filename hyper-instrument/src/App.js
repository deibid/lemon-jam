import './App.css';
import { getScaleName } from './utils/MusicTheory'

import Home from './components/Home';


getScaleName();

function App() {
  return (
    <div className="App">
      <header className="App-header">

        <Home />

      </header>
    </div>
  );
}

export default App;
