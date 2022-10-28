import React from 'react';
import { Outlet } from 'react-router-dom';
import Gnb from '../components/Common/Gnb';
import * as S from './../style/App.style'

const Layout = () => {
    return (
        <S.Container>
            <Gnb />
            <S.RightContainer>
                <Outlet />
            </S.RightContainer>
        </S.Container>
    );
};

export default Layout;