export const defaultState: any = {
  // Wallet
  isConnectWalletOpen: false,
  walletAddress: '',
  walletProvider: undefined,
  walletType: '',
  isWalletDetected: false,
  isWalletConnected: false,
  isConnectWalletLocked: false,
  readProvider: undefined,

  // Chain
  connectedChain: '',
  isOnSupportedChain: false,
};

const Reducer = (state: any, action: any) => {
  switch (action.type) {
    // Wallet
    case 'isConnectWalletOpen':
      return {
        ...state,
        isConnectWalletOpen: action.content,
      };
    case 'walletAddress':
      return {
        ...state,
        walletAddress: action.content,
      };
    case 'walletProvider':
      return {
        ...state,
        walletProvider: action.content,
      };
    case 'walletType':
      return {
        ...state,
        walletType: action.content,
      };
    case 'isWalletDetected':
      return {
        ...state,
        isWalletDetected: action.content,
      };
    case 'isWalletConnected':
      return {
        ...state,
        isWalletConnected: action.content,
      };
    case 'isConnectWalletLocked':
      return {
        ...state,
        isConnectWalletLocked: action.content,
      };
    case 'readProvider':
      return {
        ...state,
        readProvider: action.content,
      };
    // Chain
    case 'connectedChain':
      return {
        ...state,
        connectedChain: action.content,
      };
    case 'isOnSupportedChain':
      return {
        ...state,
        isOnSupportedChain: action.content,
      };
    case "resetState":
      return defaultState;
    default:
      return state;
  }
};

export default Reducer;
