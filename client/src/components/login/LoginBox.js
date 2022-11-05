import React, { useState, useEffect } from 'react';
import {
  loginsubmitList,
  isLoginState,
  loginIdstorige,
  loginSubmitErrormessage,
} from '../../atoms/atom';
import { useRecoilState } from 'recoil';
import * as S from '../../style/login/LoginBox.style';
import InputBox from './InputBox';
import { useLocation, useNavigate } from 'react-router-dom';
import { useAxios } from '../../util/useAxios';
import axios from 'axios';

const LoginBox = () => {
  const [isLogin, setIsLogin] = useRecoilState(isLoginState);
  const [isSubmit, setIsSubmit] = useState(false);
  const [isEmailOk, setIsEmailOk] = useState(true);
  const [isPasswordOk, setIsPasswordOk] = useState(true);
  const [loginList, setloginList] = useRecoilState(loginsubmitList);
  const [loginId, setLoginId] = useRecoilState(loginIdstorige);
  const [errorMessage, setErrorMessage] = useRecoilState(
    loginSubmitErrormessage
  );

  const navigate = useNavigate();
  const { state } = useLocation();

  const { response, loading, error, clickFetchFunc } = useAxios(
    {
      method: 'POST',
      url: 'tasks.json',
      headers: {
        'Content-Type': `application/json`,
      },
      data: JSON.stringify(loginList),
    },
    false
  );

  const onChangeLoginForm = (e) => {
    const loginData = { ...loginList };

    if (e.target.name === 'Email') {
      loginData.email = e.target.value;
    } else if (e.target.name === 'Password') {
      loginData.password = e.target.value;
    }
    setloginList(loginData);
  };
  const handleLoginSubmit = () => {
    let isPasswordCheck, isEmailCheck, login, submit;
    //이메일 유효성
    const exptext = /^[A-Za-z0-9_\.\-]+@[A-Za-z0-9\-]+\.[A-Za-z0-9\-]+/;
    if (exptext.test(loginList.email) === true) {
      //성공
      isEmailCheck = true;
    } else {
      //살패
      isEmailCheck = false;
    }

    setIsEmailOk(isEmailCheck);

    if (loginList.password.length > 3) {
      //성공
      isPasswordCheck = true;
    } else {
      //실패
      isPasswordCheck = false;
    }
    setIsPasswordOk(isPasswordCheck);
    if (isPasswordCheck && isEmailCheck) {
      submit = true;

    } else {
      submit = false;
    }

    setIsSubmit(submit);
  };

  useEffect(() => {
    isSubmit &&
      clickFetchFunc({
        method: 'POST',
        // url: 'tasks.json', //파이어 베이스 사용
        url: '/auth/login',
        headers: {
          'Content-Type': `application/x-www-form-urlencoded`,
        },
        withCredentials: true,
        data: loginList,
      });
  }, [isSubmit]);

  useEffect(() => {
    if (response) {
      setLoginId(response);
      // setErrorMessage(false)
      setIsLogin(true);
    }
    if (error) {
      setIsSubmit(false);
      // window.location.reload()
      setErrorMessage(true);
    }
  }, [response, error]);

  isLogin && navigate(-1);

  return (
    <S.Box>
      <InputBox
        onChangeLoginForm={onChangeLoginForm}
        isSubmit={isEmailOk}
        inputName={'Email'}
        CheckAlert={'Checking for invalid email address.'}
        inputType='text'
      />
      <InputBox
        onChangeLoginForm={onChangeLoginForm}
        isSubmit={isPasswordOk}
        inputName={'Password'}
        CheckAlert={'Password must be at least 8 characters.'}
        inputType='password'
      />
      {errorMessage ? <S.Alert>Pleses check email and password</S.Alert> : null}
      <S.SubmitBtn onClick={handleLoginSubmit}>Log in</S.SubmitBtn>
    </S.Box>
  );
};

export default LoginBox;
