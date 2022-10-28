import Question from './pages/Question';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import Main from './pages/Main';
import './style/common.css';
import Logout from './pages/Logout';
import Header from './components/Common/Header';
import AuthLayout from './components/auth/AuthLayout';
import AuthPage from './components/auth/AuthPage';
import Layout from './pages/Layout';
import AuthContainer from './pages/AuthContainer';

import Gnb from './components/Common/Gnb';
import QuestionWrite from './pages/QuestionWrite';
import Footer from './components/Common/Footer';




function App() {

  return (
    <>

      <BrowserRouter>

        <Header />

        <Routes>
          <Route path='/' element={<Layout />} >
            <Route path='/' element={<Main />} />
          </Route>

          <Route path='/question' element={<Question />} />

          <Route path='/' element={<AuthContainer />}>
            <Route path='/login' element={<Login />} />
            <Route path='/logout' element={<Logout />} />
            <Route path='/signup' element={<SignUp />} />
          </Route>

          <Route element={<AuthLayout />}>
            <Route path="/auth" element={<AuthPage />} />
          </Route>
        </Routes>


      </BrowserRouter>

    </>


  );
}

export default App;
