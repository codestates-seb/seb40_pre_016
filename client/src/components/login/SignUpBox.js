import React, { useState } from 'react';
import * as S from '../../style/login/SignUpBox.style';
import InputBox from './InputBox';
import ReCAPTCHA from "react-google-recaptcha";
import { useRecoilState } from 'recoil';
import { signupSubmitList, loadAuthPage } from '../../atoms/atom';
import { Navigate, useNavigate } from 'react-router-dom';

const SignUpBox = () => {
    const [isSignSubmit, setIsSignSubmit] = useState(true)
    const [signupList, setsignupList] = useRecoilState(signupSubmitList);
    const [isSubmit, setIsSubmit] = useState(false)
    const [isDisplayNameOk, setIsDisplayNameOk] = useState(true);
    const [isEmailOk, setIsEmailOk] = useState(true);
    const [isPasswordOk, setIsPasswordOk] = useState(true);
    const [ischeckedOK, setIsCheckedOK] = useState(true)
    const [isAuthPage, setIsAuthPage] = useRecoilState(loadAuthPage)

    const navigate = useNavigate();

    function onChange(value) {
        console.log("Captcha value:", value);
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
        signupData.checked = e.target.checked
        setsignupList(signupData)

    }
    console.log(signupList)

    const handleSignupSubmit = () => {
        //이메일 유효성
        const exptext = /^[A-Za-z0-9_\.\-]+@[A-Za-z0-9\-]+\.[A-Za-z0-9\-]+/;
        if (exptext.test(signupList.email) === true) {
            //성공
            setIsEmailOk(true)
            console.log('email 성공')
        }
        else {
            //살패
            setIsEmailOk(false)
            console.log('email 실패')
        }


        if (signupList.password.length > 3) {//성공
            setIsPasswordOk(true)
            console.log('password 성공')
        }
        else {
            //실패
            setIsPasswordOk(false)
            console.log('password 실패')
        }

        if (signupList.displayName.length > 1) {
            //성공
            setIsDisplayNameOk(true)
            console.log('displayName 성공')
        } else {
            //실패
            setIsDisplayNameOk(false)
            console.log('displayName 실패')
        }


        if (signupList.checked) {
            //성공
            setIsCheckedOK(true)
        } else {
            setIsCheckedOK(false)
            console.log(ischeckedOK)
        }

        if (isDisplayNameOk && isEmailOk && isPasswordOk && ischeckedOK) {
            //전송
            console.log([isDisplayNameOk, isEmailOk, isPasswordOk, ischeckedOK])
            setIsSubmit(true)
            setsignupList({
                displayName: '', email: '', password: '', checked: false
            })
        } else {
            setIsSubmit(false)
        }



        //navigate
        // Cookies.set("id", "id");

        //state 를 저장해두고 로그인 시 이전에 선택한 path state로 이동
        if (isSubmit) {
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
                <input onChange={onChangeSignupForm} id='opt' name='checkbox' type='checkbox' />
                <S.LabelWarp className={!ischeckedOK ? 'red' : null} htmlFor='opt'>Opt-in to receive occasional product updates, user research invitations, company announcements, and digests.</S.LabelWarp>
            </S.CheckBox>



            <S.SubmitBtn onClick={handleSignupSubmit}>
                Log in
            </S.SubmitBtn>
        </S.Box>
    );
};

export default SignUpBox;