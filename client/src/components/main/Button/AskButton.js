import React from "react";
import styled from "styled-components";

const AskButtonStyled = styled.div`
  margin-left: auto;

  &:hover{
    cursor: pointer;
    background-color: rgb(57,113,199);
  }
`;

const AskButton = (props) => {
  return (
    <AskButtonStyled>{props.children}</AskButtonStyled>
  );
}


export default AskButton;