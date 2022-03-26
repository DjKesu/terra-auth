import './App.css';
import Header from './components/Header.js';
import BoxContent from './components/BoxContent.js';
import ConnectWallet from './components/ConnectWallet.js';

//hi guys! its me
function App() {
  return (
    <div className="App">
      <Header/>
        <button type="button" className="login-with-google-btn">Recover Terra Station Wallet</button>
        <button type="button" className="login-with-google-btn">Create New Terra Station Wallet</button>
      <ConnectWallet/>
    </div>
  );
}

export default App;
