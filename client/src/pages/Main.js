import React, { useState } from 'react';
import QuestionList from '../components/main/Question/QuestionList';
import DUMMYDATA from '../components/main/Question/dummyData';
import AskQuestion from '../components/main/AskQuestion/AskQuestion';
import styled from 'styled-components';
import Filter from '../components/main/Filter/Filter';
import PageList from '../components/main/PageList/PageList';
import { useRecoilState, useRecoilValue } from 'recoil';
import { questionList } from '../atoms/atom';
import QuestionRightSidebar from '../components/Question/RightSideBar';

const MainStyeld = styled.div`
  padding: 24px;
`;

const Main = () => {
  return (
    <>
      <MainStyeld>
        <AskQuestion />
        <Filter></Filter>
        <QuestionList />
        <PageList />
      </MainStyeld>
      <QuestionRightSidebar />
    </>
  );
};

export default Main;
