import './App.css'
import { Game } from './Game/Game';

import { WalletProvider, ConnectionProvider, useWallet } from '@solana/wallet-adapter-react';
import { WalletModalProvider, WalletMultiButton } from '@solana/wallet-adapter-react-ui';
import { getPhantomWallet } from '@solana/wallet-adapter-wallets';

const wallets = [getPhantomWallet()]

function App() {
    // alert("Hello %username%! You can move with '⇐' '⇑' '⇒' '⇓' keys, and fire on <space>. Default move speed is 8 pixels per one press. You can increase it by press button. To run the game click 'start'. Pineapples can be treacherous. Watch out the blackholes. Good luck!      WIN OR DIE!")
    const wallet = useWallet()

    return (
      !wallet.connected
        ? <div style={{ display: 'flex', justifyContent: 'center', marginTop: '100px' }}>
            <WalletMultiButton />
          </div>
        : <div className="App">
            <Game/>
          </div>
    );
}

const AppWithProvider = () => (
  <ConnectionProvider endpoint="http://127.0.0.1:8899">
    <WalletProvider wallets={wallets} autoConnect>
      <WalletModalProvider>
        <App />
      </WalletModalProvider>
    </WalletProvider>
  </ConnectionProvider>
)


export default AppWithProvider;

