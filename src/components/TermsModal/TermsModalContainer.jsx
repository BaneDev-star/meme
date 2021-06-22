import React from 'react';
import TermsModal from "./TermsModal";
import {useDispatch, useSelector} from 'react-redux';
import {setAppliedTermsOfService} from "../../store/modules/User/actions";

export default function TermsModalContainer(props) {
    const dispatch = useDispatch();

    const {appliedTermsOfService} = useSelector(state => state.user);
    const onApply = () => dispatch(setAppliedTermsOfService(true));

    return (
        <TermsModal
            visible={!appliedTermsOfService}
            {...props}
            {...{onApply}}
        />
    );
}
