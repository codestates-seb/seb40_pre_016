import React from "react";
import * as S from "../../style/tags/TagComponents.style";

const TagComponent = ({ name, count }) => {
  return (
    <S.TagBox>
      <S.QCRTag>
        <span>{name}</span>
        <p>{count} Questions</p>
      </S.QCRTag>
    </S.TagBox>
  );
};

export default TagComponent;
