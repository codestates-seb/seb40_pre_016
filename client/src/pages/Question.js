import styled from 'styled-components'; //만들고 이동
import QuestionHeader from '../components/Question/QuestionHeader';
import QuestionRightSidebar from '../components/Question/RightSideBar';
import YourAnswer from '../components/Question/YourAnswer';
import QuestionCompo from '../components/Question/QuestionCompo';
import QCommentCompo from '../components/Question/QCommentCompo';

const Qcontainer = styled.section`
`;

// 콘텐츠 바디
const QContents = styled.section`
  max-width: 1000px;
  width: 1000px;
  height: auto;
  display: flex;
`;

// 콘텐츠
const QContentContainer = styled.section`
  width: 100%;
`;

function Question() {
  return (
    <Qcontainer>
      <QuestionHeader />
      <QContents>
        <QContentContainer>
          <QuestionCompo />
          <QCommentCompo />
          <YourAnswer />
        </QContentContainer>
        <QuestionRightSidebar />
      </QContents>
    </Qcontainer>
  );
}

export default Question;
