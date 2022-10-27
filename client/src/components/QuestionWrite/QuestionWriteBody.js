import React from "react";
import { QuestionBodyContainer } from '../../style/QuestionWrite/QuestionWriteBody.style';


const QuestionWriteBody = () => {
  return (
    <QuestionBodyContainer>

      <div className="title">
        <h1>Title</h1>
        <p>Be specific and imagine you’re asking a question to another person</p>
        <input
          placeholder="e.g. Is there an R function for finding the index of an element in a vector?"
        >
        </input>
      </div>

      <div className="body">
        <h1>Body</h1>
        <p>Include all the information someone would need to answer your question</p>
      </div>

      <div className="tags">
        <h1>Tag</h1>
        <p>Add up to 5 tags to describe what your question is about</p>
        <input
          placeholder="e.g. (angular sql-server string)"
        >
        </input>
      </div>

    </QuestionBodyContainer>

  );
};

export default QuestionWriteBody;