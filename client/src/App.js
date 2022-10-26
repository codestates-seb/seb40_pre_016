import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Login from './pages/Login';
import SignUp from './pages/SignUp';
import './style/common.css';
import { createGlobalStyle } from 'styled-components'
import * as S from './style/App.style'
import reset from 'styled-reset'
import Logout from './pages/Logout';
import Header from './components/Common/Header';
import Gnb from './components/Common/Gnb';
const GlobalStyle = createGlobalStyle`
  ${reset}
`

function App() {
  return (
    <>
      <BrowserRouter>
        <GlobalStyle />
        <Header />

        <S.Container>
          <Gnb />
          <Routes>


            <Route path='/login' element={<Login />}>
              {' '}
            </Route>
            <Route path='/signup' element={<SignUp />}>
              {' '}
            </Route>
          </Routes>

        </S.Container>

        <S.BackGround>
          {/* <Route path='/login' element={<Login />}>
            {' '}
          </Route> */}
          {/* <Logout /> */}
          {/* <SignUp /> */}
          {/* <Login /> */}
        </S.BackGround>


      </BrowserRouter>
    </>

  );
}

export default App;
