import metamask from './img/metamask.png';
import walletconnect from './img/walletconnect.png';
import coinbase from './img/coinbase.png';
import formatic from './img/formatic.png';
import portis from './img/portis.png';

export const PROVIDER_TYPES = {
    METAMASK: 'MetaMask',
    WALLETCONNECT: 'WalletConnect',
    COINBASE: 'Coinbase Wallet',
    FORMATIC: 'Formatic',
    PORTIS: 'Portis'
};

export const PROVIDER_ITEMS = [
    {
        name: PROVIDER_TYPES.METAMASK,
        description: 'Easy to use browser extension.',
        picture: metamask
    },
    {
        name: PROVIDER_TYPES.WALLETCONNECT,
        description: '',
        picture: walletconnect
    },
    {
        name: PROVIDER_TYPES.COINBASE,
        description: '',
        picture: coinbase
    },
    {
        name: PROVIDER_TYPES.FORMATIC,
        description: '',
        picture: formatic
    },
    {
        name: PROVIDER_TYPES.PORTIS,
        description: '',
        picture: portis
    }
]