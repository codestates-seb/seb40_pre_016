import React from 'react';
import { Link } from 'react-router-dom';
import * as S from './../../style/auth/UserPage.style'

const UserInfo = () => {
    const data = 'dfafdadfadfadfaef'
    return (
        <S.AboutTab>
            <S.AboutHead>About</S.AboutHead>

            {data ?
                <S.AboutDataCompo>
                    {data}
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