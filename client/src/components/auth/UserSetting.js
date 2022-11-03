import React from 'react';
import * as S from './../../style/auth/UserPage.style'
import { Editor } from '@toast-ui/react-editor';
import '@toast-ui/editor/dist/toastui-editor.css';
import { useRef } from 'react';
import { useState } from 'react';
import { useRecoilState } from 'recoil';
import { answer, answerFocus } from '../../atoms/atom';

const UserSetting = () => {
    const editorRef = useRef();
    const [subError, setSubError] = useState("");
    // const [check, isCheck] = useRecoilState(answerFocus);
    // console.log(answerContent, subError)
    // const [answerContent, isAnswerContent] = useRecoilState(answer);
    const onChange = () => {
        const data = editorRef.current.getInstance().getHTML();
        if (data.length > 30) { setSubError('') }
        // isAnswerContent(data)
        console.log(data)
    }


    return (
        <S.AboutTab>
            <S.AboutHead>Edit your profile</S.AboutHead>
            <S.AboutCompo>
                <S.Title>Display Name</S.Title>
                <S.InputName type='text' name='displayName' placeholder='닉네임을 입력해주세요' />
                <S.Title>About</S.Title>
                <Editor
                    initialValue=' '
                    placeholder='Write Your Answers'
                    previewStyle='tab' // 미리보기 스타일 지정
                    height='300px' // 에디터 창 높이
                    initialEditType='markdown'
                    ref={editorRef}
                    onChange={onChange}
                    // onFocus={onFocus}
                    // onBlur={onBlur}
                    autofocus={false}
                />
            </S.AboutCompo>
        </S.AboutTab>
    );
};

export default UserSetting;