export interface ChainIdInterface {
  readable: string;
  hex: string;
}
export interface ChainNativeCurrencyInterface {
  name: string;
  symbol: string;
  decimals: number;
}

interface ChainInterface {
  label: string;
  shortLabel: string;
  chainId: ChainIdInterface;
  defaultRpc: string;
  explorerUrl: string;
  nativeCurrency: ChainNativeCurrencyInterface;
}
export interface ChainHolderInterface {
  [key: string]: ChainInterface;
}


export const chains: ChainHolderInterface = {
  base: {
    label: 'Base',
    shortLabel: 'Base',
    chainId: {
      readable: '8453',
      hex: '0x2105',
    },
    nativeCurrency: {
      name: 'ETH',
      symbol: 'ETH',
      decimals: 18,
    },
    defaultRpc: 'https://mainnet.base.org',
    explorerUrl: 'https://basescan.org',
  },
};

export const defaultChain = chains.base;

export const supportedChains = [
  chains.base.chainId.hex,
];