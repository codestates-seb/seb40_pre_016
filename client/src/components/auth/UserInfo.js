import React from 'react';
import { Link } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { setuserEditstate } from '../../atoms/atom';
import * as S from './../../style/auth/UserPage.style'

const UserInfo = ({ aboutMe }) => {
    const [userEditData, setUserEditData] = useRecoilState(setuserEditstate)
    return (
        <S.AboutTab>
            <S.AboutHead>About</S.AboutHead>

            {userEditData.message !== ' ' ?
                <S.AboutDataCompo>
                    {userEditData.message}
                </S.AboutDataCompo>
                :
                <S.AboutCompo>
                    <S.AboutP>
                        Your about me section is currently blank. Would you<br /> like to add one? <Link to='/user/setting'>Add Profile</Link>
                    </S.AboutP>
                </S.AboutCompo>

            }


        </S.AboutTab>
    );
};

export default UserInfo;