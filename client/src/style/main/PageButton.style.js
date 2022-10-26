import styled from "styled-components";

export const PageButtonStyled = styled.button`
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