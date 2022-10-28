import React from "react";
import * as S from '../../../style/main/AskButton.style';

const AskButton = ({ children }) => {
  return (
    <S.AskButtonStyled >{children}</S.AskButtonStyled>
  );
}


export default AskButton;