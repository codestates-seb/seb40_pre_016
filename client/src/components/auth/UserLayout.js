import React from 'react';
import { Outlet } from 'react-router-dom';
import styled from 'styled-components';
import PageList from '../main/PageList/PageList';
const UserLayoutContainer = styled.div`
width: 100%;
`
const UserLayout = () => {
    return (
        <UserLayoutContainer>
            <Outlet />
            <PageList location={'users'} child={'content'} />
        </UserLayoutContainer>
    );
};

export default UserLayout;