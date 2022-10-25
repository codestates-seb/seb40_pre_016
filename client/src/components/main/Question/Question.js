import styled from 'styled-components';
import img from '../../../assets/img/userAvatar.jpeg';

const QuestionContainer = styled.div`
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  border: 1px gray solid;
  padding: 16px;
  display: flex;
  height: 127px;
`;


const StatContainer = styled.div`
  margin: 0px 16px 4px 0px;
  gap : 6px;
  font-size: 13px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;
const Votes = styled.div`
  color: #0C0D0E;
`;

const Answers = styled.div`
  color: #6A737C;
`;

const Views = styled.div`

`;

const ContentContainer = styled.div`
    flex-shrink: 1;
`;

const Title = styled.div`
  font-size: 17px;
  color: #0A95FF;
  margin-bottom: 5px;
`;

const Content = styled.div`
  font-size: 13px;
  color: #3B4045;
  margin-bottom: 8px;
`;

const FooterContainer = styled.div`
  font-size: 12px;
  width: 100%;
  
  display: flex;
  justify-content: flex-start;


  > ul{
    display: flex;
  }
`;

const FooterTags = styled.li`
  background-color: #D0E3F1;
  margin: 4px;
  color : #39739D;
  padding: 4.6px, 6px;
`;


const UserInfoContainer = styled.div`
  margin-left: auto;
  display: flex;

  > img{
    width: 16px;
    height: 16px;
  }
  
  div{
    margin-left: 5px;
  }

  .userName{
    color: #0074CC;
  }

  .askCount{
    color: #525960;
  }

  .userTime{
    color: #6A737C;
  }
`;




// const title = 'Elastic Search - Mysql and Delta changes'
// const content = 'I have done some analysis and have decided to provide the search for DB search for full text for mysql db How to integrate elastic search and handle the delta happens in mysql -';
// const tags = ['tag1', 'tag2', 'tag3'];
// const userName = 'MiguelMunoz';
// const askCount = '4329';
// const userTime = '1 min ago'
const Question = ({ question }) => {
  console.log(question)
  return (
    <QuestionContainer>

      <StatContainer>
        <Votes>{`${question.votes} votes`}</Votes>
        <Answers>{`${question.votes} answers`}</Answers>
        <Views>{`${question.votes} views`}</Views>
      </StatContainer>

      <ContentContainer>
        <Title>{question.title}</Title>
        <Content>{question.content}</Content>
        <FooterContainer>
          <ul>
            {question.tags.map(el => (<FooterTags>{el}</FooterTags>))}
          </ul>
          <UserInfoContainer>
            <img src={img} alt='userImg' />
            <div className='userName'>{question.userName}</div>
            <div className='askCount'>{question.askCount}</div>
            <div className='userTime'>{question.userTime}</div>
          </UserInfoContainer>
        </FooterContainer>
      </ContentContainer>

    </QuestionContainer>
  );
};

export default Question;