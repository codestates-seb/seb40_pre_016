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
width: calc(100% - 300px);
  padding: 24px;
`;
const DisplayFlex = styled.div`

display: flex;
`
const Main = () => {
  return (
    <DisplayFlex>
      <MainStyeld>
        <AskQuestion />
        <Filter></Filter>
        <QuestionList />
        {/* <PageList /> */}
      </MainStyeld>
      <QuestionRightSidebar />
    </DisplayFlex>
  );
};

export default Main;
