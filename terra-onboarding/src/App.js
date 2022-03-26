import "./App.css";
import WalletCheck from "../src/components/WalletCheck";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div>
          <h1>Terra Onboarding</h1>
          <WalletCheck/>
        </div>
      </header>
    </div>
  );
}

export default App;
