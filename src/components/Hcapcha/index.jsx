import React, { useRef } from 'react';

import HCaptcha from '@hcaptcha/react-hcaptcha';

const hCapchaToken = "3e340c6f-972d-420d-b18b-5f277022d6be";

export default function Capcha() {
    const capcha = useRef();

    const onVeriy = (token, ekey) => {

    }

    const onError = (err) => {

    }

    return (
        <HCaptcha
            ref={capcha}
            sitekey={hCapchaToken}
            onVerify={onVeriy}
            onError={onError}
        />
    );
}