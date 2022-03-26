import './App.css';
import Header from './components/Header.js';
import BoxContent from './components/BoxContent.js';
import ConnectSample from './components/Test.js';
import StepFlow from './components/StepFlow.js';

//hi guys! its me
function App() {
  return (
    <div className="App">
      <Header/>
        <button type="button" className="login-with-google-btn">Recover Terra Station Wallet</button>
        <button type="button" className="login-with-google-btn">Create New Terra Station Wallet</button>
        <StepFlow/>
      <ConnectSample/>
    </div>
  );
}

export default App;
