import './App.css'
import useBlockchainConnection from './hooks/wallet/useBlockchainConnection/useBlockchainConnection'
import ConnectWalletButton from './ConnectWalletButton'

function App() {
  useBlockchainConnection();

  return (
    <>
      <div className="card">
        <ConnectWalletButton />
      </div>
    </>
  )
}

export default App
