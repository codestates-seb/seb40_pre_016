import React, { useState } from 'react';
import * as S from '../../style/login/SignUpBox.style';
import InputBox from './InputBox';


const SignUpBox = () => {
    const [isSubmit, setIsSubmit] = useState(true)
    return (
        <S.Box>
            <InputBox isSubmit={isSubmit} inputName={'Display name'} CheckAlert={'Display name must be at least 2 characters.'} />
            <InputBox isSubmit={isSubmit} inputName={'Email'} CheckAlert={'Checking for invalid email address.'} />
            <InputBox isSubmit={isSubmit} inputName={'Password'} CheckAlert={'Password must be at least 8 characters.'} />
            <S.P>Passwords must contain at least eight characters, including at least 1 letter and 1 number.</S.P>

            <S.CheckBox>
                <input id='opt' type='checkbox' />
                <S.LabelWarp htmlFor='opt'>Opt-in to receive occasional product updates, user research invitations, company announcements, and digests.</S.LabelWarp>
            </S.CheckBox>

            <S.SubmitBtn>
                Log in
            </S.SubmitBtn>
        </S.Box>
    );
};

export default SignUpBox;