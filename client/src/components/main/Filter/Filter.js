import React from "react";
import * as S from '../../../style/main/Filter.style'
import SelectButton from "../Button/SelectButton";
import { useRecoilState } from "recoil";
import { questionList } from '../../../atoms/atom';
import { filterBtnIdx } from "../../../atoms/atom";


const Filter = () => {
  const [currentBtn, setCurrentButton] = useRecoilState(filterBtnIdx);
  const [questions, setQuestions] = useRecoilState(questionList);
  const filteredQuestions = questions.slice()
  const buttonNameList = ['Newest', 'Active', 'Bountied', 'Unanswered', 'Votes'];

  const btnCheckHandler = (idx) => {
    setCurrentButton(idx);
    sortHandler(idx);
  };

  const sortHandler = (idx) => {
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
    setQuestions(filteredQuestions);
  }

  return (
    <S.FilterContainer>
      <h1>
        <p>23,143,715 questions</p>
      </h1>
      <div>
        {buttonNameList.map((el, idx) => (
          <SelectButton key={idx}
            onClick={() => btnCheckHandler(idx)}
            className={`default${currentBtn === idx ? ' clicked' : ''}`}
          >{el}</SelectButton>))}
      </div>
    </S.FilterContainer>
  );
};

export default Filter;