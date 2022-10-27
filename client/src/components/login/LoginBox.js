import React, { useState } from 'react';
import { loginsubmitList, isLoginState, loadAuthPage } from '../../atoms/atom';
import { useRecoilState } from 'recoil';
import * as S from '../../style/login/LoginBox.style'
import InputBox from './InputBox';
import { useLocation, useNavigate } from 'react-router-dom';

const LoginBox = () => {

    const [isLogin, setIsLogin] = useRecoilState(isLoginState)
    const [isSubmit, setIsSubmit] = useState(true)
    const [isEmailOk, setIsEmailOk] = useState(true);
    const [isPasswordOk, setIsPasswordOk] = useState(true);
    const [loginList, setloginList] = useRecoilState(loginsubmitList);
    const [isAuthPage, setIsAuthPage] = useRecoilState(loadAuthPage)

    const navigate = useNavigate();
    const { state } = useLocation();


    const onChangeLoginForm = (e) => {
        const loginData = { ...loginList }

        if (e.target.name === 'Email') {
            loginData.email = e.target.value;
        } else if (e.target.name === 'Password') {
            loginData.password = e.target.value;
        }
        setloginList(loginData)

    }
    console.log(loginList)
    const handleLoginSubmit = () => {
        //이메일 유효성
        const exptext = /^[A-Za-z0-9_\.\-]+@[A-Za-z0-9\-]+\.[A-Za-z0-9\-]+/;
        if (exptext.test(loginList.email) === true) {
            //성공
            setIsEmailOk(true)
            console.log('email 성공')
        }
        else {
            //살패
            setIsEmailOk(false)
            console.log('email 실패')
        }


        if (loginList.password.length > 3) {//성공
            setIsPasswordOk(true)
            console.log('password 성공')
        }
        else {
            //실패
            setIsPasswordOk(false)
            console.log('password 실패')
        }
        if (isEmailOk && isPasswordOk) {
            setIsSubmit(true)
            setIsLogin(true)
            setloginList({ email: '', password: '' })
        } else {
            setIsSubmit(false)
        }

        console.log('islogin' + isLogin)
        //navigate
        // Cookies.set("id", "id");

        //state 를 저장해두고 로그인 시 이전에 선택한 path state로 이동
        if (isLogin) {
            if (state) {
                navigate(state);
            } else {
                navigate("/");
                setIsAuthPage(false)
            }
        }
    }

    return (
        <S.Box>
            <InputBox onChangeLoginForm={onChangeLoginForm} isSubmit={isEmailOk} inputName={'Email'} CheckAlert={'Checking for invalid email address.'} inputType='text' />
            <InputBox onChangeLoginForm={onChangeLoginForm} isSubmit={isPasswordOk} inputName={'Password'} CheckAlert={'Password must be at least 8 characters.'} inputType='password' />

            <S.SubmitBtn onClick={handleLoginSubmit}>
                Log in
            </S.SubmitBtn>

        </S.Box>
    );
};

export default LoginBox;