import Question from './pages/Question';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import Main from './pages/Main';
import './style/common.css';
import Logout from './pages/Logout';
import Header from './components/Common/Header';
import AuthLayout from './components/auth/AuthLayout';
import Layout from './pages/Layout';
import AuthContainer from './pages/AuthContainer';
import QuestionWrite from './pages/QuestionWrite';
import Footer from './components/Common/Footer';
import UserPage from './components/auth/UserPage';

function App() {

  return (
    <>

      <BrowserRouter>

        <Header />

        <Routes>
          <Route path='/' element={<Layout />} >
            <Route path='/' element={<Main />} />
            <Route path='/question' element={<Question />} />
          </Route>

          <Route path='/askquestion' element={<QuestionWrite />} />
          <Route path='/' element={<AuthContainer />}>
            <Route path='/login' element={<Login />} />
            <Route path='/logout' element={<Logout />} />
            <Route path='/signup' element={<SignUp />} />
          </Route>

          <Route element={<AuthLayout />}>
            <Route path="/auth" element={<UserPage />} />
          </Route>
        </Routes>
        <Footer />

      </BrowserRouter>

    </>


  );
}

export default App;