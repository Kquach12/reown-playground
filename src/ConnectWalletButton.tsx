import { useEffect, useContext, useState } from 'react';
import { useAppKit } from '@reown/appkit/react'
import { Context } from './Store';

const ConnectWalletButton = () => {
  const [state]: any = useContext(Context);
  const [walletConnected, setWalletConnected] = useState<boolean>(false);
  const [formattedWalletAddress, setFormattedWalletAddress] = useState<string>('');
  const { open } = useAppKit();

  useEffect(() => {
    if (state.walletAddress && state.walletAddress.length !== 0) {
      setWalletConnected(true);
      setFormattedWalletAddress(shortenAddress(state.walletAddress));
    } else {
      setWalletConnected(false);
      setFormattedWalletAddress('');
    }
  }, [state.walletAddress, state.connectedChain]);

  return (
    <button
      onClick={() => {
        open()
      }}
    >
      {walletConnected ? 
        <div style={{display: 'flex', alignItems: 'center', gap: '4px'}}>
          {formattedWalletAddress} 

        </div>
        : 
          'Connect Wallet' 
      }
    </button>
  );
};


export function shortenAddress(address: string) {
  if (address.length === 42) {
    return address.substring(0, 6) + '...' + address.substring(37, 42);
  } else {
    return address;
  }
}

export default ConnectWalletButton;
