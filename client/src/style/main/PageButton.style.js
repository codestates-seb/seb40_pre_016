import styled from 'styled-components';

export const PageButtonStyled = styled.button`
  height: 30px;
  width: ${(props) => (props.width ? props.width : props.width)};

  border: none;
  border-radius: 3px;

  &.default {
    background-color: white;
    color: black;
  }
  & a {
    width: 30px;
    height: 30px;
    border: 1px solid rgb(211, 211, 211);
  border-radius: 3px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  }
  & a.active {
    background-color: rgb(229, 136, 62);
    color: white;
  }
  & a.active:hover {background-color: rgb(229, 136, 62);}

  &:hover {
    background-color: rgba(205, 205, 205);
  }
`;
