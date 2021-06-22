import React from 'react';
import {useSelector} from "react-redux";
import WrongNetworkModal from "./WrongNetworkModal";

export default function WrongNetworkModalContainer(props) {
 const {wrongNetwork} = useSelector(state => state.user);

  return (
      <WrongNetworkModal visible={wrongNetwork} {...props}/>
  );
}
