
import React from "react";
import {useSelector, useDispatch} from "react-redux";
import {getAccountSymbol} from "../../../services/web3";
import Header from "./Header";
import {setConnectModalVisible} from "../../../store/modules/App/actions";

export default function HeaderContainer(props) {
    /*
      Use container to interact with external data sources (store, api, etc.)
    */
    const dispatch = useDispatch();

    const {isMobile, isTablet} = useSelector(state => state.app);
    const isConnected = useSelector(state => state.user?.connectWallet.isConnect);
    const address = useSelector(state => state.user?.userAccount.accounts ? state.user.userAccount.accounts[0] : '');
    const balance = useSelector(state => state.user?.userAccount.balance ?? 0);
    const chainId = useSelector(state => state.user?.chainId);
    const symbol = getAccountSymbol(chainId);
    const onConnectClick = () => dispatch(setConnectModalVisible(true));


    return (
        <Header
            {...props}
            {...{
                isMobile,
                isTablet,
                isConnected,
                address,
                balance,
                chainId,
                symbol,
                onConnectClick,
            }}
        />
    )
};
