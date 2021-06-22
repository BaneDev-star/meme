import Web3 from 'web3';
import { get, filter, isEmpty } from 'lodash';
import { createAction, createActions } from 'redux-actions';
import detectEthereumProvider from '@metamask/detect-provider';
import Logger from "js-logger";
import {ALLOWED_NETWORKS} from "./constants";
import User from "./api";

export const setNotifications = createAction('SET_NOTIFICATIONS');
export const setAppliedTermsOfService = createAction('SET_APPLIED_TERMS_OF_SERVICE');
export const setChainId = createAction('SET_NETWORK');
export const setWrongNetwork = createAction('SET_WRONG_NETWORK');
export const setUserAccounts = createAction('SET_USER_ACCOUNTS');
export const clearUserDataOnDisconnectMetamask = createAction('CLEAR_USER_DATA_ON_DISCONNECT_METAMASK');

const { connectWalletRequest, connectWalletSuccess, connectWalletFail } = createActions({
    CONNECT_WALLET_REQUEST: () => { },
    CONNECT_WALLET_SUCCESS: data => ({ data }),
    CONNECT_WALLET_FAIL: error => ({ error })
});

export const loadNotifications = (account) => (dispatch) => {
    User.fetchNotifications(account).then(result => (
        dispatch(setNotifications(result.data))
    ));
}

export const setNetwork = (chainId) => (dispatch) => {
    dispatch(setChainId(chainId));
    dispatch(validateNetwork(chainId));
};

export const validateNetwork = (chainId) => (dispatch, getState) => {
    const {wrongNetwork} = getState().user;

    if (chainId) {
        const isValid = ALLOWED_NETWORKS.indexOf(chainId) !== -1;

        if (!isValid && !wrongNetwork) {
            Logger.warn('WALLET_WRONG_NETWORK', chainId);

            dispatch(setWrongNetwork(true));
        } else if (isValid && wrongNetwork) {
            dispatch(setWrongNetwork(false));
        }
    } else if (wrongNetwork) {
        dispatch(setWrongNetwork(false));
    }
};

export const connectMetaMask = () => async dispatch => {
    dispatch(connectWalletRequest());

    // Check metamask is install or not
    if (window.ethereum) {
        const provider = await detectEthereumProvider();
        // If the provider returned by detectEthereumProvider is not the same as
        // window.ethereum, something is overwriting it, perhaps another wallet.
        if (provider !== window.ethereum) {
            window.web3 = new Web3(provider);
        } else {
            window.web3 = new Web3(window.ethereum);
        }

        return window.ethereum.request({ method: 'eth_requestAccounts' })
            .then(async () => {
                dispatch(connectWalletSuccess());

                const chainId = window.ethereum.chainId;
                const accounts = await window.web3.eth.getAccounts();
                const balance = await window.web3.eth.getBalance(accounts[0]);
                dispatch(setUserAccounts({ accounts, balance, chainId }));

                // Load notifications
                dispatch(loadNotifications(accounts[0]));

                return true;
            })
            .catch((error) => {
                dispatch(connectWalletFail(error));
                return false;
            });
    }

    return new Promise((resolve, reject) => {
        const err = 'Metamask not install.';
        dispatch(connectWalletFail(err));

        reject(err);
    });
};

/** CLEAR TRANSACTION LOGS **/
export const clearTransactionLogs = createAction('CLEAR_TRANSACTION_LOGS');
export const clearTransactionLog = (accountAddress, chainId) => (dispatch, getState) => {
    const transactionLogs = getState().user.transactionLogs;
    const logData = transactionLogs.result;

    const filterLog = filter(logData, item => {
        return item.chainId !== chainId && get(item, 'accountAddress', '').toLowerCase() !== accountAddress.toLowerCase();
    });

    dispatch(clearTransactionLogs(filterLog));
};

export const autoConnect = () => async dispatch => {

    if (window.ethereum) {
        Logger.info('WALLET_AUTO_CONNECT');

        const provider = await detectEthereumProvider();
        // If the provider returned by detectEthereumProvider is not the same as
        // window.ethereum, something is overwriting it, perhaps another wallet.
        if (provider !== window.ethereum) {
            window.web3 = new Web3(provider);
        } else {
            window.web3 = new Web3(window.ethereum);
        }

        window.ethereum.request({ method: 'eth_chainId' }).then((chainId) => {
            Logger.info('WALLET_CHAIN_ID', chainId);

            // Set network when first time enter page
            dispatch(setNetwork(chainId));
        });

        window.ethereum.request({ method: 'eth_accounts' }).then((accounts) => {
            Logger.info('WALLET_ACCOUNTS', accounts);

            if (isEmpty(accounts)) {
                dispatch(setUserAccounts({ accounts: [], balance: 0, ris3Balance: 0 }));
            } else {
                dispatch(setUserAccounts({ accounts }));

                // Load notifications
                dispatch(loadNotifications(accounts[0]));

                window.web3.eth.getBalance(accounts[0])
                    .then(balance =>  dispatch(setUserAccounts({ balance })));
            }
        });
    }
};

export const disconnect = () => async dispatch => {
    // TODO: implement logic
};
