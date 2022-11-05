import React, { useEffect, useState } from 'react';
import * as S from '../../style/login/SignUpBox.style';
import InputBox from './InputBox';
import ReCAPTCHA from 'react-google-recaptcha';
import { useRecoilState } from 'recoil';
import { signupSubmitList } from '../../atoms/atom';
import { useLocation, useNavigate } from 'react-router-dom';
import { useAxios } from '../../util/useAxios';

const SignUpBox = () => {
  const [signupList, setsignupList] = useRecoilState(signupSubmitList);
  const [isSubmit, setIsSubmit] = useState(false);
  const [isDisplayNameOk, setIsDisplayNameOk] = useState(true);
  const [isEmailOk, setIsEmailOk] = useState(true);
  const [isPasswordOk, setIsPasswordOk] = useState(true);
  const [ischeckedOK, setIsCheckedOK] = useState(true);

  const navigate = useNavigate();

  const { response, loading, error, clickFetchFunc } = useAxios(
    {
      method: 'POST',
      url: 'tasks.json',
      headers: {
        'Content-Type': `application/json`,
      },
      data: JSON.stringify('temp'),
    },
    false
  );

  function onChange(value) {
    const signupData = { ...signupList };
    signupData.captcha = value;
    setsignupList(signupData);
  }

  const onChangeSignupForm = (e) => {
    const signupData = { ...signupList };

    if (e.target.name === 'Email') {
      signupData.email = e.target.value;
    } else if (e.target.name === 'Password') {
      signupData.password = e.target.value;
    } else if (e.target.name === 'Display name') {
      signupData.displayName = e.target.value;
    }

    setsignupList(signupData);
  };
  const onChangeCheckbox = (e) => {
    const signupData = { ...signupList };
    signupData.checked = e.target.checked;
    setsignupList(signupData);
  };

  const handleSignupSubmit = () => {
    //이메일 유효성
    let isEmailCheck, isPasswordCheck, isDisplayCheck, isCheckedCheck, submit;
    const exptext = /^[A-Za-z0-9_\.\-]+@[A-Za-z0-9\-]+\.[A-Za-z0-9\-]+/;
    if (exptext.test(signupList.email) === true) {
      //성공
      isEmailCheck = true;

    } else {
      //살패
      isEmailCheck = false;
    }
    setIsEmailOk(isEmailCheck);

    if (signupList.password.length > 3) {
      //성공
      isPasswordCheck = true;

    } else {
      //실패
      isPasswordCheck = false;
    }
    setIsPasswordOk(isPasswordCheck);

    if (signupList.displayName.length > 1) {
      //성공
      isDisplayCheck = true;
    } else {
      //실패
      isDisplayCheck = false;
    }
    setIsDisplayNameOk(isDisplayCheck);

    if (signupList.checked) {
      //성공
      isCheckedCheck = true;
    } else {
      isCheckedCheck = false;
    }

    if (
      isDisplayCheck &&
      isPasswordCheck &&
      isPasswordCheck &&
      isCheckedCheck &&
      signupList.captcha !== ''
    ) {
      //전송
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
        url: '/auth/signup',
        headers: {
          'Content-Type': `application/x-www-form-urlencoded`,
        },
        withCredentials: true,
        data: {
          username: signupList.displayName,
          email: signupList.email,
          password: signupList.password,
        },
      });
    setIsSubmit(false);
  }, [isSubmit]);
  useEffect(() => {
    //새 질문의 id값으로 페이지 이동
    error && navigate(`/`);
  }, [error]);

  const SITE_KEY = process.env.REACT_APP_RECAPCHA_SITEKEY;
  return (
    <S.Box>
      <InputBox
        isSubmit={isDisplayNameOk}
        onChangeSignupForm={onChangeSignupForm}
        inputName={'Display name'}
        CheckAlert={'Display name must be at least 2 characters.'}
        inputType='text'
      />
      <InputBox
        isSubmit={isEmailOk}
        onChangeSignupForm={onChangeSignupForm}
        inputName={'Email'}
        CheckAlert={'Checking for invalid email address.'}
        inputType='text'
      />
      <InputBox
        isSubmit={isPasswordOk}
        onChangeSignupForm={onChangeSignupForm}
        inputName={'Password'}
        CheckAlert={'Password must be at least 8 characters.'}
        inputType='password'
      />
      <S.P>
        Passwords must contain at least eight characters, including at least 1
        letter and 1 number.
      </S.P>
      <S.RecapchaBox>
        <ReCAPTCHA sitekey={`${SITE_KEY}`} onChange={onChange} />
      </S.RecapchaBox>
      <S.CheckBox>
        <input
          onChange={onChangeCheckbox}
          id='opt'
          name='checkbox'
          type='checkbox'
        />
        <S.LabelWarp className={!ischeckedOK ? 'red' : null} htmlFor='opt'>
          Opt-in to receive occasional product updates, user research
          invitations, company announcements, and digests.
        </S.LabelWarp>
      </S.CheckBox>

      <S.SubmitBtn onClick={handleSignupSubmit}>Log in</S.SubmitBtn>
    </S.Box>
  );
};

export default SignUpBox;
