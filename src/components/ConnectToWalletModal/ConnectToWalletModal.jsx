import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Modal from '../Modal';
import ProviderList from './ProviderList';
import { PROVIDER_ITEMS } from './constants';
import Button from '../Button';
import { connectMetaMask } from '../../store/modules/User/actions';

import style from './ConnectToWalletModal.module.scss';

export default function ConnectToWalletModal(props) {
  const { wrapperClass, onCancel, ...restProps } = props;
  const [selectedItem, setSelectedItem] = useState(null);
  const requesting = useSelector(state => (state.user.connectWallet.requesting));
  const error = useSelector(state => (state.user.connectWallet.error));
  const dispatch = useDispatch();

  const onSelect = async (item) => {
    setSelectedItem(item);

    if (item.name === 'MetaMask') {
      try {
        await dispatch(connectMetaMask());
        onCancel();
      } catch (e) {

      }
    }
  };

  return (
    <Modal
      wrapperClass={wrapperClass}
      title={renderTitle(selectedItem, setSelectedItem)}
      width={390}
      onCancel={onCancel}
      {...restProps}
    >
      <ProviderList
        items={PROVIDER_ITEMS}
        selectedItem={selectedItem}
        onSelect={onSelect}
        onRepeat={onSelect}
        requesting={requesting}
        error={error}
      />
    </Modal>
  );
}

function renderTitle(selectedItem, setSelectedItem) {
  if (selectedItem) {
    return (
      <Button
        wrapperClass={style.back}
        onClick={() => setSelectedItem(null)}
        text={'Back'}
      />
    );
  }
  return 'Connect to a Wallet';
}
