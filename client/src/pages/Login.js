import React from 'react';
import styled from 'styled-components';
import LoginBox from '../components/login/LoginBox';
import OAthLogin from '../components/login/OAthLogin';
import * as S from '../style/login/Login.style'


const Login = () => {
    return (
        <S.Container>
            <S.LoginWarp>
                <S.Div>
                    <OAthLogin />
                    <LoginBox />
                </S.Div>
            </S.LoginWarp>
        </S.Container>
    );
};

export default Login;