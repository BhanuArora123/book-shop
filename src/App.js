import './App.css';
import { useSelector } from 'react-redux';
import Headers from './components/Headers/Headers';
import { useEffect } from 'react';
function App() {
  return (
    <div className="App">
      <Headers />
    </div>
  );
}

export default App;
