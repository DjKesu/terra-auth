import './App.css';
import Button from './components/Button.js';
import Header from './components/Header.js';
import BoxContent from './components/BoxContent.js';
import ConnectSample from './components/Test.js';

//hi guys! its me
function App() {
  return (
    <div className="App">
      {/* <Header/>
      <h1>Log in with your wallet!</h1>
      <div className='BoxContent'>
        <p>Click here to sign in with your existing wallet!</p>
        <Button text = "Import Wallet"/>
      </div>
      <div className='BoxContent'>
        <p>Don't have a wallet? Click here to make on!</p>
        <Button text = "Create Wallet"/>
      </div> */}
      <ConnectSample/>
    </div>
  );
}

export default App;
