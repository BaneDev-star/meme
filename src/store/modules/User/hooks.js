import {useEffect} from "react";
import {
    autoConnect,
    clearUserDataOnDisconnectMetamask,
    setNetwork,
    setUserAccounts
} from "./actions";
import Web3 from "web3";
import {useDispatch} from "react-redux";
import Logger from "js-logger";

export function UseUserInit() {
    /*
        Basic initialization logic for the module:
        init scripts, event listeners, etc...
    */

    const dispatch = useDispatch();

    // Init wallet

    useEffect(() => {
        const dispatchAutoConnect = () => dispatch(autoConnect());
        const dispatchClearUserMetaMask = () => dispatch(clearUserDataOnDisconnectMetamask());
        const dispatchSetUserAccount = data => dispatch(setUserAccounts(data));
        const dispatchSetNetwork = chainId => dispatch(setNetwork(chainId));

        if (!window.ethereum) {
            return
        } else {
            dispatchAutoConnect();
        }

        window.ethereum.on('accountsChanged', (accounts) => {
            Logger.info('WALLET_ACCOUNTS_CHANGED', accounts);

            dispatchSetUserAccount({ accounts });
            if (!accounts || !accounts[0]) {
                dispatchClearUserMetaMask();
            }
        });

        window.ethereum.on('chainChanged', async (chainId) => {
            Logger.info('WALLET_CHAIN_CHANGED', chainId);

            window.web3 = new Web3(window.ethereum);
            const accounts = await window.web3.eth.getAccounts();
            let balance;

            dispatchSetNetwork(chainId);

            if (accounts && accounts[0]) {
                balance = await window.web3.eth.getBalance(accounts[0]);
                dispatchSetUserAccount({ balance, chainId });
            }
        });
    }, [dispatch]);
}