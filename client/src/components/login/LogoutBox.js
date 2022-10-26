import * as S from '../../style/login/LogoutBox.style'
import LinkLogo01 from './../../assets/img/logout_link_img_01.png'
import LinkLogo02 from './../../assets/img/logout_link_img_02.png'
import LinkLogo03 from './../../assets/img/logout_link_img_03.png'
import LinkLogo04 from './../../assets/img/logout_link_img_04.jpeg'
import LinkLogo05 from './../../assets/img/logout_link_img_05.png'
import LinkLogo06 from './../../assets/img/logout_link_img_06.png'
import LinkLogo07 from './../../assets/img/logout_link_img_07.png'

const LogoutBox = () => {
    return (
        <S.Box>
            <S.LinkWarp>
                <S.LinkLi>
                    <img src={LinkLogo01} alt='askubuntu LogoImg' />
                    <a href='https://askubuntu.com'>askubuntu.com</a>
                </S.LinkLi>
                <S.LinkLi>
                    <img src={LinkLogo02} alt='mathoverflow.net LogoImg' />
                    <a href='https://mathoverflow.net'>mathoverflow.net</a>
                </S.LinkLi>
                <S.LinkLi>
                    <img src={LinkLogo03} alt='serverfault.com LogoImg' />
                    <a href='https://serverfault.com'>serverfault.com</a>
                </S.LinkLi>
                <S.LinkLi>
                    <img src={LinkLogo04} alt='stackapps.com LogoImg' />
                    <a href='https://stackapps.com'>stackapps.com</a>
                </S.LinkLi>
                <S.LinkLi>
                    <img src={LinkLogo05} alt='stackexchange.com LogoImg' />
                    <a href='https://stackexchange.com'>stackexchange.com</a>
                </S.LinkLi>
                <S.LinkLi>
                    <img src={LinkLogo06} alt='stackoverflow.com LogoImg' />
                    <a href='https://stackoverflow.com'>stackoverflow.com</a>
                </S.LinkLi>
                <S.LinkLi>
                    <img src={LinkLogo07} alt='superuser.com LogoImg' />
                    <a href='https://superuser.com'>superuser.com</a>
                </S.LinkLi>
            </S.LinkWarp>


            <S.CheckBox>
                <input id='logout' type='checkbox' />
                <S.LabelWarp htmlFor='logout'>Log out on all devices</S.LabelWarp>
            </S.CheckBox>

            <S.BtnWrap>
                <S.LogoutBtn>
                    Log out
                </S.LogoutBtn>
                <S.CancelBtn>
                    Cancel
                </S.CancelBtn>

            </S.BtnWrap>

            <S.PTag>
                if you're on a shared computer, remember to log out of your Open ID provider (Facebook, Google, Stack Exchange, etc.) as well.
            </S.PTag>


        </S.Box>
    );
};

export default LogoutBox;