import LogoutBox from '../components/login/LogoutBox';
import * as S from '../style/login/Logout.style'

const Logout = () => {
    return (
        <S.Container>

            <S.Layout>
                <p className='pTag'>Clicking "log out" will log you out of the following domains on this device:</p>
                <S.LogoutBoxWrap>
                    <LogoutBox />
                </S.LogoutBoxWrap>
            </S.Layout>

        </S.Container>
    );
};

export default Logout;