import styled from "styled-components";

export const QuestionContainer = styled.div`
font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
border: 1px gray solid;
padding: 16px;
flex-basis: 100px;
display: flex;

@media screen and (max-width: 640px) {
  flex-direction: column;
}

`;


export const StatContainer = styled.div`
margin: 0px 16px 4px 0px;
gap : 6px;
font-size: 13px;
display: flex;
flex-direction: column;
align-items: flex-end;
flex-basis: 108px;
flex-shrink: 0;

@media screen and (max-width: 640px) {
  flex-direction: row;
  flex-basis: 0;
}


`;
export const Votes = styled.div`
color: #0C0D0E;
`;


export const Answers = styled.div`
color: #6A737C;
`;


export const Views = styled.div`

`;

export const ContentContainer = styled.div`
  flex-shrink: 1;
`;

export const Title = styled.div`
font-size: 17px;
color: #0A95FF;
margin-bottom: 5px;
`;

export const Content = styled.div`
font-size: 13px;
color: #3B4045;
margin-bottom: 8px;
`;

export const FooterContainer = styled.div`
font-size: 12px;
width: 100%;

display: flex;
justify-content: flex-start;

flex-wrap: wrap;

`;


export const UserInfoContainer = styled.div`
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