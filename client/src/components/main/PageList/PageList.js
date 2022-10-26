import React, { useState } from "react";
import styled from "styled-components";
import PageButton from "../Button/PageButton";


const PageListContainerStyled = styled.div`
  display: flex;
  padding-bottom: 100px;
  height: 300px;
  
`;

const PageListStyled = styled.div`
  display: flex;
  gap: 5px;
  margin-left: auto;
  margin-top: 50px;
`;



const PageList = () => {
  const [currentButton, setCurrentButton] = useState(0);

  const btnCheckHandler = (idx) => {
    setCurrentButton(idx);
  };

  const listCount = 5;
  const listCountArr = []
  for (let i = 1; i <= listCount; i++) {
    listCountArr.push(i);
  }




  return (
    <PageListContainerStyled>
      <PageListStyled>
        <PageButton width='50px'>Prev</PageButton>
        {listCountArr.map((el, idx) => {
          return (<PageButton
            key={idx}
            width='30px'
            onClick={() => btnCheckHandler(idx)}
            className={`default${currentButton === idx ? ' clicked' : ''}`}
          >{el}</PageButton>)
        })}
        <PageButton width='50px'>Next</PageButton>
      </PageListStyled >
    </PageListContainerStyled>
  );
};


export default PageList;