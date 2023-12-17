import logo from './logo.svg';
import Numbers from './Components/Numbers';
import Screen from './Components/Screen';
import Operators from './Components/Operators';
import './App.css';

const App=()=>{
  
  return (
    <div className="App">
      <h1>Calculator</h1>
      <div className="Cal">
        <Screen/>    
      </div>
    </div>
  );
}

export default App;
