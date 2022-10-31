import React from 'react';
import * as S from '../../../style/main/SelectButton.style';

const SelectButton = ({ onClick, children, className }) => {
  return (
    <S.SelectButtonStyled onClick={onClick} className={className}>
      {children}
    </S.SelectButtonStyled>
  );
};

export default SelectButton;
