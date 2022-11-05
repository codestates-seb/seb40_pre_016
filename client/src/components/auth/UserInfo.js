import { Viewer } from '@toast-ui/react-editor';
import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { isRecoilValue, useRecoilState, useRecoilValue } from 'recoil';
import { isLoginState, loginIdstorige, setuserEditstate, UserPrevData } from '../../atoms/atom';
import * as S from './../../style/auth/UserPage.style'

const UserInfo = () => {
    const [userPrevData, setUserPrevData] = useRecoilState(UserPrevData)
    console.log('info페이지 어바웃미', userPrevData.message)
    const params = useParams()
    const isLogin = isRecoilValue(isLoginState);
    const loginId = useRecoilValue(loginIdstorige);

    return (
        <S.AboutTab>
            <S.AboutHead>About</S.AboutHead>

            {userPrevData.message !== ' ' ?
                <S.AboutDataCompo>
                    <Viewer initialValue={userPrevData.message} />

                </S.AboutDataCompo>
                :
                (
                    isLogin && params.userId == loginId ?
                        <S.AboutCompo>
                            <S.AboutP>
                                Your about me section is currently blank. Would you<br /> like to add one? <Link to='/user/setting'>Add Profile</Link>
                            </S.AboutP>
                        </S.AboutCompo>
                        :
                        null
                )


            }


        </S.AboutTab>
    );
};

export default UserInfo;