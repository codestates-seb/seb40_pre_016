import React from 'react';
import img from '../../../assets/img/userAvatar.jpeg';
import * as S from '../../../style/main/Question.style';
import TagButton from '../Button/TagButtion';
import { Link } from 'react-router-dom';

const Question = ({ question }) => {

  //axios 로 받아온 id

  let questionId = 1
  return (
    <S.QuestionContainer>
      <S.StatContainer>
        <S.Votes>{`${question.votes} votes`}</S.Votes>
        <S.Answers>{`${question.votes} answers`}</S.Answers>
        <S.Views>{`${question.votes} views`}</S.Views>
      </S.StatContainer>

      <S.ContentContainer>
        <S.Title>
          <Link to={`question/${questionId}`}>{question.title}</Link>
        </S.Title>

        <S.Content>{question.content}</S.Content>
        <S.FooterContainer>
          {question.tags.map((el, idx) => (
            <TagButton key={idx}>{el}</TagButton>
          ))}
          <S.UserInfoContainer>
            <img src={img} alt='userImg' />
            <div className='userName'>{question.userName}</div>
            <div className='askCount'>{question.askCount}</div>
            <div className='userTime'>{question.userTime} min ago</div>
          </S.UserInfoContainer>
        </S.FooterContainer>
      </S.ContentContainer>
    </S.QuestionContainer>
  );
};

export default Question;
