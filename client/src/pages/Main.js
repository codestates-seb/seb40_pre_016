import React from "react";
import QuestionList from "../components/main/Question/QuestionList";
import DUMMYDATA from "../components/main/Question/dummyData";
import AskQuestion from "../components/main/AskQuestion/AskQuestion";

const Main = () => {
  return (
    <>
      <AskQuestion></AskQuestion>
      <QuestionList questionList={DUMMYDATA} />
    </>
  );
};

export default Main;