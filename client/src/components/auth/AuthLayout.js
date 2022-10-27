import React, { useEffect } from 'react';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import { isLoginState } from '../../atoms/atom';

const AuthLayout = () => {
    const navigate = useNavigate();
    const { pathname } = useLocation();
    const isLogin = useRecoilValue(isLoginState)

    useEffect(() => {
        //!Cookies.get("id")
        if (!isLogin) {
            navigate("/login", { state: pathname });
        }
    }, []);
    return (
        <div>
            <Outlet />
        </div>
    );
};

export default AuthLayout;