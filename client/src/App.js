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
import Footer from './components/Common/Footer';




function App() {
  return (
    <>
      <BrowserRouter>

        <Header />

        <S.Container>
          <Gnb />
          <Routes>
            <Route path='/login' element={<Main />}>
              {' '}
            </Route>
            <Route path='/question' element={<Question />}>
              {' '}
            </Route>

            <Route path='/signup' element={<SignUp />}>
              {' '}
            </Route>
          </Routes>

        </S.Container>
        <Footer />

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
