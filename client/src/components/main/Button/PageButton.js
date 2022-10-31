import React from 'react';
import * as S from '../../../style/main/PageButton.style';

const PageButton = ({ children, width, className, onClick }) => {
  return (
    <S.PageButtonStyled width={width} onClick={onClick} className={className}>
      {children}
    </S.PageButtonStyled>
  );
};

export default PageButton;
