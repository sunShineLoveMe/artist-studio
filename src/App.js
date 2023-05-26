import logo from './logo.svg';
import './App.css';
import { ethers } from 'ethers';

function App() {
  const connect = async () => {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    await provider.send("eth_requestAccounts", []);
    const signer = provider.getSigner();
  }

  return (
    <div className="App">
      <button onClick={connect}>Connect Wallet</button>
    </div>
  );
}

export default App;
