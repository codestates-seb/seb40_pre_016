import React from "react";
import QuestionList from "../components/main/Question/QuestionList";
import DUMMYDATA from "../components/main/Question/dummyData";
import AskQuestion from "../components/main/AskQuestion/AskQuestion";
import styled from 'styled-components';
import Filter from "../components/main/Filter/Filter";
const MainStyeld = styled.div`
  padding: 24px;
`;

const Main = () => {
  return (
    <>
      <MainStyeld>
        <AskQuestion />
        <Filter />
        <QuestionList questionList={DUMMYDATA} />
      </MainStyeld>
    </>
  );
};

export default Main;