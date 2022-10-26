import React, { useState } from "react";
import styled from 'styled-components';
import SelectButton from "../Button/SelectButton";

const FilterContainer = styled.div`
  display: flex;
  margin-bottom: 12px;
  
  & h1{
    font-size: 17px;
  }

  & div{
    margin-left: auto;
  }

`;

const Filter = () => {
  const [currentButton, setCurrentButton] = useState(0);

  const btnCheckHandler = (idx) => {
    console.log(currentButton)
    setCurrentButton(idx);
  };

  const buttonNameList = ['Active', 'Bountied', 'Unanswered', 'More'];

  return (
    <FilterContainer>
      <h1>23,143,715 questions</h1>
      <div>
        {buttonNameList.map((el, idx) => (
          <SelectButton key={idx}
            onClick={() => btnCheckHandler(idx)}
            className={`default${currentButton === idx ? ' clicked' : ''}`}
          >{el}</SelectButton>))}
      </div>
    </FilterContainer>
  );
};

export default Filter;