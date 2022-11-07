import LoginBox from '../components/login/LoginBox';
import OAthLogin from '../components/login/OAthLogin';
import * as S from '../style/login/Login.style'


const Login = () => {


    return (
        <S.Container>
            <S.LoginWarp>
                <S.Div>
                    <LoginBox />
                    <S.P> Don't have an account?<S.Link>Sign up</S.Link> </S.P>
                </S.Div>
            </S.LoginWarp>

        </S.Container>
    );
};

export default Login;