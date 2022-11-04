import React from 'react';
import AskButton from '../Button/AskButton';
import * as S from '../../../style/main/AskQuestion.style';
import { Link } from 'react-router-dom';
import { isLoginState } from '../../../atoms/atom';
import { useRecoilState } from 'recoil';

const AskQuestion = () => {
  const [isLogin, setIsLogin] = useRecoilState(isLoginState);
  const moveTo = isLogin ? '/askquestion' : '/login';
  return (
    <S.AskQuestionContainer>
      <h1>All Questions</h1>
      <Link to={moveTo}>
        <AskButton>Ask Question</AskButton>
      </Link>
    </S.AskQuestionContainer>
  );
};

export default AskQuestion;
