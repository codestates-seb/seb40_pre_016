import React, { useState } from 'react';
import * as S from '../../style/login/LoginBox.style'
import InputBox from './InputBox';

const LoginBox = () => {

    const [isSubmit, setIsSubmit] = useState(true)
    return (
        <S.Box>
            <InputBox isSubmit={isSubmit} inputName={'Email'} CheckAlert={'Checking for invalid email address.'} />
            <InputBox isSubmit={isSubmit} inputName={'Password'} CheckAlert={'Password must be at least 8 characters.'} />

            <S.SubmitBtn>
                Log in
            </S.SubmitBtn>

        </S.Box>
    );
};

export default LoginBox;