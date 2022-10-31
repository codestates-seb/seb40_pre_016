import React from 'react';
import { Outlet } from 'react-router-dom';
import styled from 'styled-components';
const Container = styled.div`
  width: 100%;
  background-color: var(--black-050);
  padding-top: 50px;
`;
const AuthContainer = () => {
  return (
    <Container>
      <Outlet />
    </Container>
  );
};

export default AuthContainer;
