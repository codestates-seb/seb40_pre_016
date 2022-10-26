import React from "react";


import styled from "styled-components";

const PageButtonStyled = styled.button`
  height: 30px;
  width: ${props =>
    props.width ? props.width : props.width};

  border: 1px solid rgb(211, 211, 211);
  border-radius: 3px;

  &.default {
    background-color: white;
    color: black;
  }

  &.clicked {
    background-color: rgb(229, 136, 62);
    color: white;
  }

  &:hover{
    background-color: rgba(205,205,205);
  }
`;


const PageButton = ({ children, width, className, onClick }) => {
  console.log(width)
  return (
    <PageButtonStyled width={width} onClick={onClick} className={className}>{children}</PageButtonStyled>
  );

};

export default PageButton;