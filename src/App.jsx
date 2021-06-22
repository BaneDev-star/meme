import React from 'react';
import Router from "./router";
import {UseAppInit} from "./store/modules/App/hooks";
import {UseUserInit} from "./store/modules/User/hooks";
import Logger from "js-logger";
import {LoaderContainer} from "./components/PageLayout/Loader";
import {ConnectToWalletModalContainer} from "./components/ConnectToWalletModal";
import {TermsModalContainer} from "./components/TermsModal";
import {WrongNetworkModalContainer} from "./components/WrongNetworkModal";

function App() {
    Logger.useDefaults();

    // Initiate state
    UseAppInit();
    UseUserInit();

    return (
        <>
            <Router/>
            <LoaderContainer/>
            <ConnectToWalletModalContainer/>
            <WrongNetworkModalContainer/>
            <TermsModalContainer/>
        </>
    );
}

export default App;
