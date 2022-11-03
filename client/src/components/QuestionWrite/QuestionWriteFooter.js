import { QuestionWriteFooterContainer } from '../../style/QuestionWrite/QuestionWriteFooter.style';
import { newQuestionState } from '../../atoms/atom';
import { useRecoilState } from 'recoil';
import { useAxios } from '../../util/useAxios';
import { useNavigate, useParams } from 'react-router-dom';
import { useEffect } from 'react';
const QuestionWriteFooter = () => {
  const [newQuestion, setNewQuestion] = useRecoilState(newQuestionState);
  let postData = Object.assign({}, newQuestion);
  const navigate = useNavigate();
  const { response, loading, error, clickFetchFunc } = useAxios(
    {
      method: 'POST',
      url: 'tasks.json',
      headers: {
        'Content-Type': `application/json`,
      },
      data: JSON.stringify(postData),
    },
    false
  );
  const makeNewTagsArray = () => {
    let tempArr = postData.tagNames.map((el) => {
      return el.content;
    });
    postData = { ...postData, tagNames: tempArr };
  };

  const addAnswerHandler = () => {
    makeNewTagsArray();
    clickFetchFunc({
      method: 'POST',
      // url: 'tasks.json', //파이어 베이스 사용
      url: '/api/questions',
      headers: {
        'Content-Type': `application/json`,
      },
      withCredentials: true,
      data: postData,
    });

    setNewQuestion({
      title: '',
      content: ' ',
      tagNames: [],
    });
  };

  useEffect(() => {
    //새 질문의 id값으로 페이지 이동
    response && navigate(`/questions/${response + ''}`);
  }, [response]);

  return (
    <QuestionWriteFooterContainer>
      <button onClick={addAnswerHandler}>Review your question</button>
    </QuestionWriteFooterContainer>
  );
};

export default QuestionWriteFooter;
