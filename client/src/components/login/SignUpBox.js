import React, { useEffect, useState } from 'react';
import * as S from '../../style/login/SignUpBox.style';
import InputBox from './InputBox';
import ReCAPTCHA from "react-google-recaptcha";
import { useRecoilState } from 'recoil';
import { signupSubmitList, loadAuthPage } from '../../atoms/atom';
import { useNavigate } from 'react-router-dom';

const SignUpBox = () => {
    const [signupList, setsignupList] = useRecoilState(signupSubmitList);
    const [isSubmit, setIsSubmit] = useState(false)
    const [isDisplayNameOk, setIsDisplayNameOk] = useState(true);
    const [isEmailOk, setIsEmailOk] = useState(true);
    const [isPasswordOk, setIsPasswordOk] = useState(true);
    const [ischeckedOK, setIsCheckedOK] = useState(true)
    const [isAuthPage, setIsAuthPage] = useRecoilState(loadAuthPage)

    const navigate = useNavigate();

    function onChange(value) {
        const signupData = { ...signupList }
        signupData.captcha = value
        setsignupList(signupData)
    }


    const onChangeSignupForm = (e) => {
        const signupData = { ...signupList }

        if (e.target.name === 'Email') {
            signupData.email = e.target.value;
        } else if (e.target.name === 'Password') {
            signupData.password = e.target.value;
        } else if (e.target.name === 'Display name') {
            signupData.displayName = e.target.value;
        }

        setsignupList(signupData)

    }
    const onChangeCheckbox = (e) => {
        const signupData = { ...signupList }
        signupData.checked = e.target.checked
        setsignupList(signupData)
    }
    console.log(signupList)

    const handleSignupSubmit = () => {
        //이메일 유효성
        let isEmailCheck, isPasswordCheck, isDisplayCheck, isCheckedCheck, submit
        const exptext = /^[A-Za-z0-9_\.\-]+@[A-Za-z0-9\-]+\.[A-Za-z0-9\-]+/;
        if (exptext.test(signupList.email) === true) {
            //성공
            isEmailCheck = true

            console.log('email 성공')
        }
        else {
            //살패
            isEmailCheck = false
            console.log('email 실패')
        }
        setIsEmailOk(isEmailCheck)

        if (signupList.password.length > 3) {//성공
            isPasswordCheck = true

            console.log('password 성공')
        }
        else {
            //실패
            isPasswordCheck = false
            console.log('password 실패')
        }
        setIsPasswordOk(isPasswordCheck)

        if (signupList.displayName.length > 1) {
            //성공
            isDisplayCheck = true
            console.log('displayName 성공')
        } else {
            //실패
            isDisplayCheck = false
            console.log('displayName 실패')
        }
        setIsDisplayNameOk(isDisplayCheck)


        if (signupList.checked) {
            //성공
            isCheckedCheck = true
        } else {
            isCheckedCheck = false
            console.log(ischeckedOK)
        }

        if (isDisplayCheck && isPasswordCheck && isPasswordCheck && isCheckedCheck && signupList.captcha !== '') {
            //전송
            submit = true
            setsignupList({
                displayName: '', email: '', password: '', captcha: '', checked: false
            })
        } else {
            submit = false

        }
        setIsSubmit(submit)
        if (submit) {
            console.log('실행')
            navigate("/");
            setIsAuthPage(false)
        }
    }


    const SITE_KEY = process.env.REACT_APP_RECAPCHA_SITEKEY
    return (
        <S.Box>
            <InputBox isSubmit={isDisplayNameOk} onChangeSignupForm={onChangeSignupForm} inputName={'Display name'} CheckAlert={'Display name must be at least 2 characters.'} inputType='text' />
            <InputBox isSubmit={isEmailOk} onChangeSignupForm={onChangeSignupForm} inputName={'Email'} CheckAlert={'Checking for invalid email address.'} inputType='text' />
            <InputBox isSubmit={isPasswordOk} onChangeSignupForm={onChangeSignupForm} inputName={'Password'} CheckAlert={'Password must be at least 8 characters.'} inputType='password' />
            <S.P>Passwords must contain at least eight characters, including at least 1 letter and 1 number.</S.P>
            <S.RecapchaBox>
                <ReCAPTCHA
                    sitekey={`${SITE_KEY}`}
                    onChange={onChange}
                />
            </S.RecapchaBox>
            <S.CheckBox>
                <input onChange={onChangeCheckbox} id='opt' name='checkbox' type='checkbox' />
                <S.LabelWarp className={!ischeckedOK ? 'red' : null} htmlFor='opt'>Opt-in to receive occasional product updates, user research invitations, company announcements, and digests.</S.LabelWarp>
            </S.CheckBox>



            <S.SubmitBtn onClick={handleSignupSubmit}>
                Log in
            </S.SubmitBtn>
        </S.Box>
    );
};

export default SignUpBox;