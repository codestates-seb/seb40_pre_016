import Question from './pages/Question';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import Main from './pages/Main';
import './style/common.css';
import * as S from './style/App.style'
import Logout from './pages/Logout';
import Header from './components/Common/Header';
import Gnb from './components/Common/Gnb';
import { useRecoilValue } from 'recoil';
import { loadAuthPage } from './atoms/atom'
import AuthLayout from './components/auth/AuthLayout';
import AuthPage from './components/auth/AuthPage';




function App() {
  let isPageAuth = useRecoilValue(loadAuthPage)
  return (
    <>
      <BrowserRouter>

        <Header />

        <S.Container className={isPageAuth ? 'auth_on ' : null}>
          <Gnb />
          <S.RightContainer>
            <Routes>
              <Route path='/' element={<Main />} />
              <Route path='/question' element={<Question />} />

              <Route path='/login' element={<Login />} />
              <Route path='/logout' element={<Logout />} />
              <Route path='/signup' element={<SignUp />} />

              <Route element={<AuthLayout />}>
                <Route path="/auth" element={<AuthPage />} />
              </Route>
            </Routes>
          </S.RightContainer>
        </S.Container>



      </BrowserRouter>
    </>


  );
}

export default App;
