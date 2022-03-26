import './App.css';
import Header from './components/Header.js';
import StepFlow from './components/StepFlow.js';
import ConnectWallet from './components/ConnectWallet.js';

function App() {
  return (
    <div className="App">
      <Header/>
        {/* <button type="button" className="login-with-google-btn">Recover Terra Station Wallet</button> */}
        <button type="button" className="login-with-google-btn">Create New Terra Station Wallet</button>
        <StepFlow/>
      <ConnectWallet/>
    </div>
  );
}

export default App;