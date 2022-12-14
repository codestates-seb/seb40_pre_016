import styled from 'styled-components';

export const SelectButtonStyled = styled.button`
  border: 1px solid #838C95;
  color: #3B4045;
  padding: 9.6px;

  /* background-color: ${props => props.isSelected ? 'white' : '#838C95'}; */

  &.default {
    background-color: white;
    color: black;
  }

  &.clicked {
    background-color: rgb(228,230,232);
  }

  &:hover{
    background-color: rgb(240,239,239);
  }
`;