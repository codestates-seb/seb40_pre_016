import styled from 'styled-components';

export const AskQuestionContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  margin-bottom: 12px;
  a {
    text-decoration: none;
  }
  h1 {
    font-size: 27px;
    margin: 0 12px 12px 0;
    flex-grow: 1;
  }

  button {
    width: 103px;
    height: 38px;
    border: none;
    background-color: #0a95ff;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 3px;
    font-size: 13px;
    margin-left: auto;
    margin-bottom: 12px;
  }
`;
