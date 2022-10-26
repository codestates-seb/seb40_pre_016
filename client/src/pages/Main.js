import React, { useState } from "react";
import QuestionList from "../components/main/Question/QuestionList";
import DUMMYDATA from "../components/main/Question/dummyData";
import AskQuestion from "../components/main/AskQuestion/AskQuestion";
import styled from 'styled-components';
import Filter from "../components/main/Filter/Filter";
import PageList from "../components/main/PageList/PageList";

const MainStyeld = styled.div`
  padding: 24px;
`;

const Main = () => {
  const [questions, setQuestions] = useState(DUMMYDATA);
  const filteredQuestions = questions.slice()

  const sortHandler = (idx) => {
    console.log('정렬 핸들러 실행', typeof idx)
    if (idx === 0) {
      filteredQuestions.sort((a, b) => {
        if (+a.userTime > +b.userTime) return -1;
        if (+a.userTime < +b.userTime) return 1;
        if (+a.userTime === +b.userTime) return 0;
      });
    } else if (idx === 4) {
      filteredQuestions.sort((a, b) => {
        if (+a.votes > +b.votes) return -1;
        if (+a.votes < +b.votes) return 1;
        if (+a.votes === +b.votes) return 0;
      });
    }
    setQuestions(filteredQuestions)
  }

  return (
    <>
      <MainStyeld>
        <AskQuestion />
        <Filter sortHandler={sortHandler} />
        <QuestionList questionList={filteredQuestions} />
        <PageList></PageList>
      </MainStyeld>
    </>
  );
};

export default Main;