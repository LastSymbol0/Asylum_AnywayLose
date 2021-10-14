import './App.css'
import { Game } from './Game/Game';

import { WalletProvider, ConnectionProvider, useWallet, useAnchorWallet } from '@solana/wallet-adapter-react';
import { WalletModalProvider, WalletMultiButton } from '@solana/wallet-adapter-react-ui';
import { getPhantomWallet } from '@solana/wallet-adapter-wallets';
import { useEffect } from 'react';

import { Connection, PublicKey } from '@solana/web3.js'
import { Provider, Wallet } from '@project-serum/anchor'

const wallets = [getPhantomWallet()]

function App() {
    // alert("Hello %username%! You can move with '⇐' '⇑' '⇒' '⇓' keys, and fire on <space>. Default move speed is 8 pixels per one press. You can increase it by press button. To run the game click 'start'. Pineapples can be treacherous. Watch out the blackholes. Good luck!      WIN OR DIE!")


    const wallet = useWallet()
    // const awallet = useAnchorWallet()

    // useEffect(() => {
    //   if (!wallet.connected || !wallet.ready)
    //     return;
    //   async function getProvider() {
    //     if (!wallet)
    //         return;

    //     const network = "http://localhost:8899";
    //     const connection = new Connection(network, "processed")
        
    //     const provider = new Provider(
    //       connection, awallet as Wallet, Provider.defaultOptions(),
    //     )
    //     return provider;
    // }

    //   getProvider()
    //   .then(p => {
    //       const con = p?.connection;
    //       createShipMasterNFT(awallet as Wallet, con as Connection, wallet?.publicKey as PublicKey, { name: "de", img: "e"});
    //   })
    // }, [wallet.connected])

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
  <ConnectionProvider endpoint="http://localhost:8899">
    <WalletProvider wallets={wallets} autoConnect>
      <WalletModalProvider>
        <App />
      </WalletModalProvider>
    </WalletProvider>
  </ConnectionProvider>
)


export default AppWithProvider;

