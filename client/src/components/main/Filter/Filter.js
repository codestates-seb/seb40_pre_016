import React, { useState } from "react";
import * as S from '../../../style/main/Filter.style'
import SelectButton from "../Button/SelectButton";



const Filter = ({ sortHandler }) => {
  const [currentButton, setCurrentButton] = useState(0);
  const btnCheckHandler = (idx) => {
    setCurrentButton(idx);
    sortHandler(idx);
  };
  const buttonNameList = ['Newest', 'Active', 'Bountied', 'Unanswered', 'Votes'];

  return (
    <S.FilterContainer>
      <h1>
        <p>23,143,715 questions</p>
      </h1>
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