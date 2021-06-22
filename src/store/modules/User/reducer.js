import { isEmpty, has } from 'lodash';
import { handleActions } from 'redux-actions';
import {persistReducer} from "redux-persist";
import localForage from "localforage";

const initialState = {
    connectWallet: {
        error: null,
        isConnect: false,
        requesting: false,
    },
    userAccount: {
        balance: 0,
        accounts: [],
        error: null,
        requesting: false,
    },
    notifications: [],
    chainId: '',
    wrongNetwork: false,
    appliedTermsOfService: false,
    transactionLogs: {
        result: [],
    },
};

let userReducer = handleActions({
    SET_NOTIFICATIONS: (state, { payload }) => ({
        ...state,
        notifications: payload,
    }),

     SET_APPLIED_TERMS_OF_SERVICE: (state, { payload }) => ({
        ...state,
        appliedTermsOfService: payload,
    }),

    SET_WRONG_NETWORK: (state, { payload }) => ({
        ...state,
        wrongNetwork: payload,
    }),

    SET_NETWORK: (state, { payload }) => ({
        ...state,
        chainId: payload,
    }),

    /** SET USER ACCOUNTS **/
    SET_USER_ACCOUNTS: (state, { payload }) => ({
        ...state,
        userAccount: {
            ...state.userAccount,
            accounts: has(payload, 'accounts') ? payload.accounts : state.userAccount.accounts,
            balance: has(payload, 'balance') ? payload.balance : state.userAccount.balance
        },
        connectWallet: {
            ...state.connectWallet,
            ...{ isConnect: has(payload, 'accounts') ? !isEmpty(payload.accounts) : !isEmpty(state.userAccount.accounts) },
        },
        chainId: has(payload, 'chainId') ? payload.chainId : state.chainId
    }),

    /** CONNECT WALLET **/
    CONNECT_WALLET_REQUEST: (state) => ({
        ...state,
        connectWallet: {
            ...state.connectWallet,
            requesting: true,
        },
    }),
    CONNECT_WALLET_SUCCESS: (state) => ({
        ...state,
        connectWallet: {
            ...state.connectWallet,
            requesting: false,
            isConnect: true,
            error: null,
        },
    }),
    CONNECT_WALLET_FAIL: (state, { payload }) => ({
        ...state,
        connectWallet: {
            ...state.connectWallet,
            requesting: false,
            error: payload.error,
        },
    }),

    /* CLEAR TRANSACTION LOGS */
    CLEAR_TRANSACTION_LOGS: (state, { payload }) => ({
        ...state,
        transactionLogs: {
            result: payload,
        },
    }),

}, initialState);

userReducer = persistReducer({
    key: 'user',
    storage: localForage,
    whitelist: ['userAccount', 'transactionLogs', 'chainId', 'appliedTermsOfService']
}, userReducer);

export default userReducer;
