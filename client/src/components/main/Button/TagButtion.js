import React from "react";
import * as S from '../../../style/main/TagButton.style';


const TagButton = ({ children }) => {
  return (
    <S.TagButtonStyled>{children}</S.TagButtonStyled>
  );
};

export default TagButton;