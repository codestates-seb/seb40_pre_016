import React from 'react';
import * as S from '../../style/login/LoginBox.style';

const InputBox = ({
  isSubmit,
  inputName,
  CheckAlert,
  inputType,
  onChangeLoginForm,
  onChangeSignupForm,
  onKeyPress,
}) => {
  const inputOnChange = (e) => {
    if (onChangeLoginForm) {
      onChangeLoginForm(e);
    }
    if (onChangeSignupForm) {
      onChangeSignupForm(e);
    }
  };
  return (
    <S.InputWrap>
      <S.Label>{inputName}</S.Label>
      <S.InputPosition>
        <S.Input
          onKeyDown={onKeyPress}
          onChange={inputOnChange}
          type={inputType}
          name={inputName}
          className={isSubmit ? null : `rejectInput`}
        />
        {isSubmit ? null : (
          <>
            <S.FloatingIcon>
              <svg
                stroke='currentColor'
                fill='currentColor'
                strokeWidth='0'
                viewBox='0 0 24 24'
                height='1em'
                width='1em'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path fill='none' d='M0 0h24v24H0z'></path>
                <path d='M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z'></path>
              </svg>
            </S.FloatingIcon>
            <p>{CheckAlert}</p>
          </>
        )}
      </S.InputPosition>
    </S.InputWrap>
  );
};

export default InputBox;
