import React from 'react';
import { Outlet } from 'react-router-dom';
import styled from 'styled-components';
import PageList from '../main/PageList/PageList';

const TagLayoutContainer = styled.div`
  width: 100%;
`;
const MainLayout = () => {
  return (
    <TagLayoutContainer>
      <Outlet />
      <PageList location={'questions'} />
    </TagLayoutContainer>
  );
};

export default MainLayout;
