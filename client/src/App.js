import styled from 'styled-components';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import './style/common.css';
import { createGlobalStyle } from 'styled-components'
import reset from 'styled-reset'
import Logout from './pages/Logout';
const GlobalStyle = createGlobalStyle`
  ${reset}
`
const BackGround = styled.div`

background-color: var(--background-color);
width: 100%;
height: auto;
overflow: hidden;
`
function App() {
  return (
    <>
      <GlobalStyle />
      <BackGround>
      </BackGround>

    </>

  );
}

export default App;
