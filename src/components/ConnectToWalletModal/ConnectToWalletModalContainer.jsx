import React  from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ConnectToWalletModal from "./ConnectToWalletModal";
import {setConnectModalVisible} from "../../store/modules/App/actions";

export default function ConnectToWalletModalContainer(props) {
  const dispatch = useDispatch();
  const {connectModalVisible} = useSelector(state => state.app);

  return (
      <ConnectToWalletModal
          visible={connectModalVisible}
          onCancel={() => dispatch(setConnectModalVisible(false))}
          {...props}
      />
  )
}
