import React from "react";
import * as S from '../../style/main/Filter.style'
import SelectButton from "../main/Button/SelectButton";

const Filter = () => {
  const buttonNameList = ['Popular', 'Name'];

  return (
    <S.FilterContainer>
      <div>
        {buttonNameList.map((el, idx) => (
          <SelectButton key={idx}>{el}</SelectButton>))}
      </div>
    </S.FilterContainer>
  );
};

export default Filter;