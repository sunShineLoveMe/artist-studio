import logo from './logo.svg';
import './App.css';
import { ethers } from 'ethers';
import { storeMeta } from './service/ipfs-service';

function App() {
  const connect = async () => {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    await provider.send("eth_requestAccounts", []);
    const signer = provider.getSigner();
  }

  const connectIpfs = async () => {
    await storeMeta({name: "test", age: 18})
  }

  return (
    <div>
      <div className="App">
        <button onClick={connect}>Connect Wallet</button>
      </div>
      <div>
        <button onClick={connectIpfs}>Store Meta</button>
      </div>
    </div>
  );
}

export default App;
