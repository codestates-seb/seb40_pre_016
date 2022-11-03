import React, { useState, useEffect } from 'react';
import { loginsubmitList, isLoginState } from '../../atoms/atom';
import { useRecoilState } from 'recoil';
import * as S from '../../style/login/LoginBox.style';
import InputBox from './InputBox';
import { useLocation, useNavigate } from 'react-router-dom';
import { useAxios } from '../../util/useAxios';

const LoginBox = () => {
  const [isLogin, setIsLogin] = useRecoilState(isLoginState);
  const [isSubmit, setIsSubmit] = useState(false);
  const [isEmailOk, setIsEmailOk] = useState(true);
  const [isPasswordOk, setIsPasswordOk] = useState(true);
  const [loginList, setloginList] = useRecoilState(loginsubmitList);

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
      loginData.username = e.target.value;
    } else if (e.target.name === 'Password') {
      loginData.password = e.target.value;
    }
    setloginList(loginData);
  };
  console.log('입력한 아이디 비밀번호는', loginList);
  const handleLoginSubmit = () => {
    let isPasswordCheck, isEmailCheck, login, submit;
    //이메일 유효성
    const exptext = /^[A-Za-z0-9_\.\-]+@[A-Za-z0-9\-]+\.[A-Za-z0-9\-]+/;
    if (exptext.test(loginList.email) === true) {
      //성공
      isEmailCheck = true;
      console.log('email 성공');
    } else {
      //살패
      isEmailCheck = false;
      console.log('email 실패');
    }

    setIsEmailOk(isEmailCheck);

    if (loginList.password.length > 3) {
      //성공
      isPasswordCheck = true;
      console.log('password 성공');
    } else {
      //실패
      isPasswordCheck = false;
      console.log('password 실패');
    }
    setIsPasswordOk(isPasswordCheck);
    if (isPasswordCheck && isPasswordCheck) {
      submit = true;
      login = true;

      //   setloginList({ email: '', password: '' });
    } else {
      submit = false;
      login = false;
    }
    setIsSubmit(submit);
    setIsLogin(login);
    //navigate
    // Cookies.set("id", "id");

    //state 를 저장해두고 로그인 시 이전에 선택한 path state로 이동
    // if (login) {
    //   if (state) {
    //     navigate(state);
    //   } else {
    //     navigate('/');
    //   }
    // }
  };

  useEffect(() => {
    isSubmit && console.log('로그인 요청 완료');
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
  console.log('로그인 요청 후 응답은', response, error);
  console.log('issubmit은', isSubmit);

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

      <S.SubmitBtn onClick={handleLoginSubmit}>Log in</S.SubmitBtn>
    </S.Box>
  );
};

export default LoginBox;
