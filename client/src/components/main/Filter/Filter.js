import React, { useState } from "react";
import * as S from '../../../style/main/Filter.style'
import SelectButton from "../Button/SelectButton";



const Filter = () => {
  const [currentButton, setCurrentButton] = useState(0);
  const btnCheckHandler = (idx) => {
    setCurrentButton(idx);
  };
  const buttonNameList = ['Active', 'Bountied', 'Unanswered', 'More'];

  return (
    <S.FilterContainer>
      <h1>23,143,715 questions</h1>
      <div>
        {buttonNameList.map((el, idx) => (
          <SelectButton key={idx}
            onClick={() => btnCheckHandler(idx)}
            className={`default${currentButton === idx ? ' clicked' : ''}`}
          >{el}</SelectButton>))}
      </div>
    </S.FilterContainer>
  );
};

export default Filter;