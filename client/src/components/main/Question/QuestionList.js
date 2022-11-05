import React, { useCallback, useEffect } from 'react';
import * as S from '../../../style/main/QuestionList.style';
import Question from './Question';
import { useRecoilState, useRecoilValue } from 'recoil';
import {
  questionList,
  filterBtnIdx,
  totalPageNum,
  pagesizeCount,
  tagNoneMessage,
} from '../../../atoms/atom';
import { useAxios } from '../../../util/useAxios';
import axios from 'axios';
import { useMemo } from 'react';
import { useParams } from 'react-router-dom';

const QuestionList = ({ questionLists }) => {
  const [questions, setQuestions] = useRecoilState(questionList);
  const [currentBtn, setCurrentButton] = useRecoilState(filterBtnIdx);
  const [totalPage, setTotalPage] = useRecoilState(totalPageNum);
  const size = useRecoilValue(pagesizeCount);
  const message = useRecoilValue(tagNoneMessage);
  let params = useParams();

  const config = useMemo(() => {
    return {
      method: 'GET',
      url: `/api/questions?page=${params.mainpage - 1}&size=${size.questions}&sort=${currentBtn + ',DESC'
        }`,
      withCredentials: true,
    };
  }, [currentBtn]);

  const { response, loading, error } = useAxios(config);

  useEffect(() => {
    response && setTotalPage(response.pageInfo.totalPages);
  }, [response]);

  // 한페이지에 20개 들어가면 글이 101개
  //   5페이지하고 한개남음 총 6페이지
  //   올림처리( 총갯수 / 한페이지에 나오는갯수)
  return (
    <S.QuestionListContainer>
      <ul>
        {response
          ? response.data.map((el) => {
            return (
              <li key={el.questionId}>
                <Question question={el} />
              </li>
            );
          })
          : null}
        {error ? error.message : null}
      </ul>
    </S.QuestionListContainer>
  );
};

export default QuestionList;
