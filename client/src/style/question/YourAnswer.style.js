import styled from 'styled-components';

// 답변 추가
export const QYourAnswer = styled.section`
  margin-left: 8px;

  > form > h3 {
    font-size: 18px;
    font-weight: 500;
    margin-bottom: 15px;
  }

  > form > button {
    width: 150px;
    height: 37px;
    background-color: #0a95ff;
    color: white;
    box-shadow: rgba(255, 255, 255, 0.4) 0px 1px 0px 0px inset;
    border: none;
    border-radius: 3px;

    :hover {
      background-color: #0074cc;
    }
  }
`;