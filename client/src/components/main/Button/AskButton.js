import React from "react";
import * as S from '../../../style/main/AskButton.style';

const AskButton = (props) => {
  return (
    <S.AskButtonStyled>{props.children}</S.AskButtonStyled>
  );
}


export default AskButton;