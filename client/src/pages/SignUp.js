import SignNotice from '../components/login/SignNotice';
import SignUpBox from '../components/login/SignUpBox';
import * as S from '../style/login/SignUp.style'


const SignUp = () => {
    return (
        <S.Container>
            <SignNotice />
            <div>
                <SignUpBox />
                <S.P> Already have an account?<S.Link>Log in</S.Link> </S.P>
            </div>


        </S.Container>
    );
};

export default SignUp;