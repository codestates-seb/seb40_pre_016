import React from 'react';
import * as S from '../../../style/main/SelectButton.style';
import { useRecoilState } from 'recoil';
import { filterBtnIdx } from '../../../atoms/atom';

const SelectButton = ({ children, value }) => {
  const [currentBtn, setCurrentButton] = useRecoilState(filterBtnIdx);

  const btnCheckHandler = (e, idx) => {
    setCurrentButton(e.target.value);
    console.log(e.target.value);
  };

  return (
    <S.SelectButtonStyled
      value={value}
      onClick={btnCheckHandler}
      className={`default${currentBtn === value ? ' clicked' : ''}`}
    >
      {children}
    </S.SelectButtonStyled>
  );
};

export default SelectButton;
