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

import QuestionEdit from './pages/QuestionEdit';
import AnswerEdit from './pages/AnswerEdit';

import UserPage from './components/auth/UserPage';
import Tags from './pages/Tags';

import Users from './pages/Users';
import UserInfo from './components/auth/UserInfo';
import UserSetting from './components/auth/UserSetting';
import TagLayout from './components/Tags/TagLayout';
import UserLayout from './components/auth/UserLayout';
import MainLayout from './components/main/MainLayout';

function App() {
  return (
    <>
      {/* <QuestionEdit /> */}
      <BrowserRouter>
        <Header />

        <Routes>
          <Route path='/' element={<Layout />}>
            <Route path='/questions' element={<MainLayout />}>
              <Route path='/questions/page=:mainpage' element={<Main />} />
            </Route>

            <Route path='/questions/:questionId' element={<Question />} />

            <Route
              path='/questions/:questionId/edit'
              element={<QuestionEdit />}
            />
            <Route
              path='/questions/:questionId/answeredit/:answerId'
              element={<AnswerEdit />}
            />


            <Route path='/users/:userId' element={<UserPage />}>
              <Route path='/users/:userId/profile' element={<UserInfo />} />
              <Route path='/users/:userId/setting' element={<UserSetting />} />
            </Route>

            <Route path='/tags' element={<TagLayout />}>
              <Route path='/tags/page=:tagspage' element={<Tags />} />
            </Route>
            <Route path='/users' element={<UserLayout />}>
              <Route path='/users/page=:userspage' element={<Users />} />
            </Route>
          </Route>

          <Route path='/askquestion' element={<QuestionWrite />} />
          <Route path='/' element={<AuthContainer />}>
            <Route path='/login' element={<Login />} />
            <Route path='/logout' element={<Logout />} />
            <Route path='/signup' element={<SignUp />} />
          </Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
