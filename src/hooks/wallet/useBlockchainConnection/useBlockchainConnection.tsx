import { createContext, useContext, useMemo } from 'react';
import { ethers } from 'ethers';
import { createAppKit, useAppKitAccount, useAppKitNetwork, useAppKitProvider } from '@reown/appkit/react'
import { EthersAdapter } from '@reown/appkit-adapter-ethers'
import { AppKitNetwork, base } from '@reown/appkit/networks'
import { Context } from '../../../Store';
import { defaultChain, supportedChains } from '../../../storage/Chains';

export const ChainContext = createContext({
  chainId: undefined as number | undefined,
  connectedChainId: undefined as number | undefined,
  isConnected: false,
  readProvider: undefined as ethers.BrowserProvider | undefined,
  provider: undefined as ethers.BrowserProvider | undefined,
  walletAddress: '',
});

const projectId = 'b56e18d47c72ab683b10814fe9495694'; //using public project ID here
const networks: [AppKitNetwork] = [base];
const metadata = {
  name: 'Cod3x',
  description: '',
  url: '',
  icons: []
}

createAppKit({
  adapters: [new EthersAdapter()],
  networks,
  metadata,
  projectId,
  features: {
    analytics: true,
    socials: false,
    email: false
  }
})

const useBlockchainConnection = () => {
  const [, dispatch]: any = useContext(Context);

  const { walletProvider, walletProviderType, } = useAppKitProvider("eip155");

  const { address, isConnected } = useAppKitAccount();
  const { chainId } = useAppKitNetwork();

  useMemo(() => {
    
    const connectedChainId = chainId == defaultChain.chainId.readable ? defaultChain.chainId.hex : '';
    const isOnSupportedChain = supportedChains.includes(connectedChainId);
    
    dispatch({ type: 'isOnSupportedChain', content: isOnSupportedChain });
    dispatch({
      type: 'walletProvider',
      content: walletProvider ? new ethers.BrowserProvider(walletProvider as ethers.Eip1193Provider) : undefined,
    });
    dispatch({
      type: 'walletAddress',
      content: address,
    });
    dispatch({
      type: 'connectedChain',
      content: connectedChainId,
    });
    dispatch({
      type: 'walletType',
      content: walletProviderType,
    });
    dispatch({ type: 'isWalletConnected', content: isConnected });
    dispatch({
      type: 'readProvider',
      content: new ethers.JsonRpcProvider(defaultChain.defaultRpc),
    });

  }, [dispatch, walletProvider, chainId, walletProviderType, isConnected, address]);
};

export default useBlockchainConnection;
