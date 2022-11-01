import styled from 'styled-components';

// 콘텐츠 헤더
export const QHeader = styled.section`
  margin-top: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  > h1 {
    font-size: 27px;
  }

  > a > button {
    width: 120px;
    font-size: 15px;
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

export const QHeaderr = styled.section`
  margin: 10px 0;
  height: 34px;
  font-size: 13px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
  display: flex;

  > div {
    padding-right: 8px;
  }

  > div > span {
    color: #6a737c;
    padding-right: 5px;
  }
`;
