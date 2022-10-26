import React from "react";
import styled from "styled-components";

const TagButtonStyled = styled.div`
  background-color: #D0E3F1;
  padding: 4.8px 6px;
  margin: 2px;
  color : #39739D;
  border-radius: 3px;
  font-size: 12px;
`;


const TagButton = ({ children }) => {

  return (
    <TagButtonStyled>{children}</TagButtonStyled>
  );
};

export default TagButton;