export const getAccountSymbol = chainId => {
  return 'ETH';
};

export const etherscanApiUrl = chainId => {
  const address = {};
  return address[chainId] || address['0x1'];
};

export const getProvider = chainId => {
  const address = {};
  return address[chainId] || address['0x1'];
};

export const getBlockchain = chainId => {
    return 'ethereum';
};
