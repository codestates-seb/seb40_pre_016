// import * as styled from '../../style/question/Question.style'
import styled from "styled-components"; //만들고 이동
import QuestionHeader from "../components/Question/QuestionHeader";
import QuestionRightSidebar from "../components/Question/RightSideBar";
import YourAnswer from "../components/Question/YourAnswer";
import QuestionCompo from "../components/Question/QuestionCompo";
import QCommentCompo from "../components/Question/QCommentCompo";

const Qbox = styled.section`
  //배치 확인 후 제거
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Nav = styled.section`
  //배치 확인 후 제거
  width: 100vw;
  height: 50px;
  border: 1px solid yellow;
`;

const Sidebar = styled.section`
  //배치 확인 후 제거
  width: 164px;
  height: auto;
  border: 1px solid yellow;
`;

const Dcontainer = styled.section`
  //배치 확인 후 제거
  max-width: 1264px;
  border: 1px solid yellow;
  display: flex;
`;

const Qcontainer = styled.section`
  max-width: 1300px;
`;

// 콘텐츠 바디
const QContents = styled.section`
  max-width: 1100px;
  width: 1100px;
  height: auto;
  display: flex;
`;

// 콘텐츠
const QContentContainer = styled.section`
  width: 1100px;
`;

function Question() {
  return (
    <Qbox>
      <Nav />
      <Dcontainer>
        <Sidebar />
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
      </Dcontainer>
    </Qbox>
  );
}

export default Question;
