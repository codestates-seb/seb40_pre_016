import React from 'react';
import { Outlet } from 'react-router-dom';
import styled from 'styled-components';
import PageList from '../main/PageList/PageList';

const TagLayoutContainer = styled.div`
width: 100%;
`
const TagLayout = () => {
    return (
        <TagLayoutContainer>
            <Outlet />
            <PageList location={'tags'} />
        </TagLayoutContainer>
    );
};

export default TagLayout;