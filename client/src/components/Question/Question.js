// import * as styled from '../../style/question/Question.style'
import styled from 'styled-components'; //만들고 이동
import polygon from '../../assets/image/polygon.png'

const Qbox = styled.section` //배치 확인 후 제거
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Nav = styled.section`  //배치 확인 후 제거
  width: 100vw;
  height: 50px;
  border: 1px solid yellow;
`;

const Sidebar = styled.section`  //배치 확인 후 제거
  width: 164px;
  height: auto;
  border: 1px solid yellow;
`;

const Dcontainer = styled.section` //배치 확인 후 제거
  max-width: 1264px;
  border: 1px solid yellow;
  display: flex;
`;

const Qcontainer = styled.section`
  max-width: 1300px;
  min-height: 1000px;
  border: 1px solid black;
`;

// 콘텐츠 헤더
const QHeader = styled.section`
  margin-top: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
    > h1{
        display: block;
        width: 890px;
        font-size: 27px;
    }
    > button{
        margin-left: 40px;
        width: 100px;
        height: 37px;
        background-color: #0A95FF;
        color: white;
        box-shadow: rgba(255,255,255,0.4) 0px 1px 0px 0px inset;
        border: none;
        border-radius: 3px;
        :hover{
            background-color: #0074CC;
        }
    }
`;

const QHeaderr = styled.section`
    margin-top: 10px;
    margin-left: 40px;
    height: 34px;
    font-size: 13px;
    border-bottom: 1px solid rgba(0,0,0,0.2);
    display: flex;
    > div > span {
        color: #6a737c;
        margin-right: 8px;
    }
`

// 콘텐츠 바디
const QContents = styled.section`
  border: 1px solid black;
  max-width: 1100px;
  width: 1100px;
  height: auto;
  display: flex;
`;

// 콘텐츠
const QContentContainer = styled.section`
    border: 1px solid blue;
    width: 1100px;
`;

// 질문
const QContent = styled.section`
    border: 1px solid red;
    display: flex;
`

const QContentLeft = styled.section`
    border: 1px solid brown;
    width: 7%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    
    > div {
        margin-top: 10px;
    }

    > img {
        margin-top: 10px;
        width: 30px;
        height: 30px;
        :last-child{
            rotate: 180deg;
        }
    }
`

const QContentRight = styled.section`
    border: 1px solid green;
    width: 93%;

    > div {
        margin-top: 10px;
        margin-left: 8px;
    }
`

const QCRTag = styled.section` // Tag ex
  margin: 24px 2px;
  padding: 5px 6px;
  border-radius: 10px;

  > span{
    background-color: #D3EBF8;
    color: #39739d;
    font-size: 12px;
  }
`

const QCREdit = styled.section`
  margin-left: 8px;
  display: flex;
  justify-content: space-between;
`

const QCRELeft = styled.section`
  > button {
    margin-right: 10px;
    color: rgba(0,0,0,0.6);
    cursor: pointer;
    background-color: white;
    border: none;
  }
`

const QCRERight = styled.section`
  margin-right: 10px;
  padding-top: 5px;
  padding-bottom: 10px;
  padding-left: 7px;
  background-color: #D3EBF8;
  width: 150px;
  border-radius: 5px;
  
  > span {
    font-size: 10px;
  }

  > div {
    margin-top: 10px;
  }

  > div > img {
    width: 20px;
    right: 20px;
  }

  > div > span {
    margin-left: 15px;
    color: #39739d;
  }
`

const QCRComment = styled.section`
  margin-left: 8px;
  font-size: 12px;
  color: rgba(0,0,0,0.5);
  margin-bottom: 10px;
`

// 답변
const QComment = styled.div`
    border: 1px solid green;
`
// 답변 추가
const QYourAnswer = styled.div`
    border: 1px solid pink;
`

// 콘텐츠 사이드바
const RightSidebar = styled.section`
    width: 300px;
    background-color: white;

`;

const YBox = styled.ul`
    width: 260px;
    min-height: 120px;
    list-style: inside;
    background-color: #FAF5E6;
    margin-left: 10px;
    box-shadow: rgba(0,0,0,0.3) 0px 1px 1px 1px;
    
    > li{
        padding-left: 10px;
        font-size: 13px;
        margin-top: 5px;
        margin-bottom: 12px;

        :first-child {
            list-style-type: none;
            height: 30px;
            font-size: 12px;
            font-weight: 600;
            background-color: #FBF3D5;
            color: 525960;
            padding-top: 10px;
            padding-left: 20px;
        }

        :last-child{
            padding-bottom: 20px;
        }
    }
`

function Question() {
  return (
    <Qbox>
      <Nav/>
      <Dcontainer>
        <Sidebar />
        <Qcontainer>
          <QHeader>
            <h1>안녕하세요 제목이에오</h1>
            <button>Ask Question</button>
          </QHeader>
          <QHeaderr>
            <div><span>Asked</span></div>
            <div><span>Modified</span></div>
            <div><span>Viewed</span></div>
          </QHeaderr>
          <QContents>
            <QContentContainer>
               <QContent>
                    <QContentLeft>
                        <img alt='Polygon' src={polygon} />
                        <div >0</div>
                        <img alt='Polygon' src={polygon} />
                    </QContentLeft>
                    <QContentRight>
                        <div>221026 오늘도 화이팅 !!</div>
                        <div>오늘 할일</div>
                        <div>Q 상세 페이지 마크업 완료하기</div>
                        <div>Q 상세 페이지 컴포넌트 refactoring</div>
                        <QCRTag><span>java</span></QCRTag>
                        <QCREdit>
                          <QCRELeft>
                            <button>Share</button>
                            <button>Edit</button>
                            <button>Delete</button>
                            <button>Following</button>
                          </QCRELeft>
                          <QCRERight>
                            <span>21 years ago</span>
                            <div>
                              <img src={polygon} alt="얼굴"></img>
                              <span>ID</span>
                            </div>
                          </QCRERight>
                        </QCREdit>
                        <QCRComment>Add a Comment</QCRComment>
                    </QContentRight>
               </QContent>
               <QComment>Comment</QComment>
               <QYourAnswer>Your Answer</QYourAnswer>
            </QContentContainer>
            <RightSidebar>
                <YBox>
                    <li>The Overflow Blog</li>
                    <li>How hardware and software can maximize your flow states</li>
                    <li>A flight simulator for developers to practice real world challenges and...</li>
                </YBox>
                <YBox>
                    <li>Featured on Meta</li>
                    <li>The 2022 Community-a-thon has begun!</li>
                    <li>Mobile app infrastructure being decommissioned</li>
                    <li>Staging Ground Workflow: Canned Comments</li>
                    <li>The [script] tag is being burninated</li>
                    <li>Ask Wizard Test Graduation</li>
                </YBox>
            </RightSidebar>
          </QContents>
        </Qcontainer>
      </Dcontainer>
    </Qbox>
  );
}

export default Question;