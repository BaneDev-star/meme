import React from 'react';
import Loader from "./index";
import {useSelector} from "react-redux";

export default function LoaderContainer(props) {
    const {load:{loaded}} = useSelector(state => state.app);

    return (
        <Loader isVisible={!loaded} {...props}/>
    )
}