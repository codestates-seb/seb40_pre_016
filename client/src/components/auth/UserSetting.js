import React from 'react';
import * as S from './../../style/auth/UserPage.style'
import { Editor } from '@toast-ui/react-editor';
import '@toast-ui/editor/dist/toastui-editor.css';
import { useRef } from 'react';
import { useState } from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import { answer, answerFocus, loginIdstorige, setuserEditstate } from '../../atoms/atom';
import { useAxios } from '../../util/useAxios';
import { useNavigate } from 'react-router-dom';

const UserSetting = () => {
    const editorRef = useRef();
    const [subError, setSubError] = useState("");
    const loginId = useRecoilValue(loginIdstorige);
    const navigator = useNavigate()

    const [userEditData, setUserEditData] = useRecoilState(setuserEditstate)
    const { response, loading, error, clickFetchFunc } = useAxios(
        {},
        false
    );

    const onChange = (e) => {
        const data = editorRef.current.getInstance().getMarkdown();
        if (data.length > 30) { setSubError('') }
        // isAnswerContent(data)
        setUserEditData({
            ...userEditData, message: data
        })
    }

    const changeUserData = (e) => {
        setUserEditData({
            ...userEditData, userName: e.target.value
        })
    }

    const saveEditHandler = () => {

        clickFetchFunc({
            method: 'PATCH',
            url: `/api/users/${loginId}`,
            headers: {
                'Content-Type': `application/json`,
            },
            withCredentials: true,
            data: {
                "username": userEditData.userName,
                "message": userEditData.message
            },
        });
        navigator('/user/profile')
        window.location.reload()

    }

    return (
        <S.AboutTab>
            <S.AboutHead>Edit your profile</S.AboutHead>
            <S.AboutCompo>
                <S.Title>Display Name</S.Title>
                <S.InputName type='text' value={userEditData.userName} onChange={changeUserData} name='displayName' placeholder='닉네임을 입력해주세요' />
                <S.Title>About</S.Title>
                <Editor
                    initialValue={userEditData.message}
                    placeholder='Write Your About'
                    previewStyle='tab' // 미리보기 스타일 지정
                    height='300px' // 에디터 창 높이
                    initialEditType='markdown'
                    ref={editorRef}
                    onChange={onChange}
                    // onFocus={onFocus}
                    // onBlur={onBlur}
                    autofocus={false}
                />
                <S.Button onClick={saveEditHandler} className='logout submit'>Submit</S.Button>
            </S.AboutCompo>
        </S.AboutTab>
    );
};

export default UserSetting;