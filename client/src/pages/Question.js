import styled from 'styled-components'; //만들고 이동
import QuestionHeader from '../components/Question/QuestionHeader';
import QuestionRightSidebar from '../components/Question/RightSideBar';
import YourAnswer from '../components/Question/YourAnswer';
import QuestionCompo from '../components/Question/QuestionCompo';
import QCommentCompo from '../components/Question/QCommentCompo';
import { useAxios } from '../util/useAxios';
import { useParams } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { questionData } from '../atoms/questionATom';

const Qcontainer = styled.section`
  width: 1300px;
  padding-left: 20px;
`;

// 콘텐츠 바디
const QContents = styled.section`
  height: auto;
  display: flex;
  justify-content: space-between;
`;

// 콘텐츠
const QContentContainer = styled.section``;

function Question() {
  const [data, setData] = useRecoilState(questionData);
  const params = useParams();

  const { response, loading, error } = useAxios({
    method: 'GET',
    url: `api/questions/${params.questionId}`,
  });

  setData(response);

  return (
    <Qcontainer>
      {loading ? (
        <div>Loading...</div>
      ) : (
        <>
          <QuestionHeader
            title={data.title}
            createdAt={timeCal(data.createdAt)}
            modifiedAt={timeCal(data.modifiedAt)}
            view={data.viewCount}
          />
          <QContents>
            <QContentContainer>
              <QuestionCompo
                questionId={data.questionId}
                content={data.content}
                tag={data.tagNames}
                vote={data.voteCount}
                createdAt={timeCal(data.createdAt)}
                user={data.user}
                comment={data.comments}
              />
              <QCommentCompo
                questionId={data.questionId}
                answers={data.answers}
              />
              <YourAnswer questionId={data.questionId} />
            </QContentContainer>
            <QuestionRightSidebar />
          </QContents>
        </>
      )}
    </Qcontainer>
  );
}

export default Question;

// 시간 계산기
export function timeCal(par) {
  const part = new Date(par);
  const now = new Date(); //현재 시간
  let result = '';
  let dif = 0;
  if (part.getFullYear() === now.getFullYear()) {
    // same Year
    if (part.getMonth() === now.getMonth()) {
      // same Month
      if (part.getDay() === now.getDay()) {
        // same Day
        if (part.getHours() === now.getHours()) {
          // same Hour
          if (part.getMinutes() === now.getMinutes()) {
            // same Min => NOW
            result = '지금';
          } else {
            // dif Min => 몇분전
            dif = now.getMinutes() - part.getMinutes();
            result = `${dif}분 전`;
          }
        } else {
          // dif Hour => 몇시전
          dif = now.getHours() - part.getHours();
          result = `${dif}시간 전`;
        }
      } else {
        // dif Day => 몇일전
        dif = now.getDay() - part.getDay();
        result = `${dif}일 전`;
      }
    } else {
      // dif Month => 몇월전
      dif = now.getMonth() - part.getMonth();
      result = `${dif}개월 전`;
    }
  } else {
    // dif Year => 몇년전
    dif = now.getFullYear() - part.getFullYear();
    result = `${dif}년 전`;
  }
  return result;
}
