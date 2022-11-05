import React, { useEffect } from 'react';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import { isLoginState } from '../../atoms/atom';

const LoginAuthLayout = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const isLogin = useRecoilValue(isLoginState);

  useEffect(() => {
    if (isLogin) {
      navigate('/questions/page=1', { state: pathname });
    }
  }, []);
  return (
    <>
      <Outlet />
    </>
  );
};

export default LoginAuthLayout;
