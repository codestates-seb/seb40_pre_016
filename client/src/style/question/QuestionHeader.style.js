import styled from 'styled-components';

// 콘텐츠 헤더
export const QHeader = styled.section`
  margin-top: 20px;
  margin-left: 35px;
  display: flex;
  justify-content: center;
  align-items: center;

  > h1 {
    display: block;
    width: 890px;
    font-size: 27px;
  }

  > button {
    margin-left: 50px;
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
  margin: 10px 40px;
  height: 34px;
  font-size: 13px;
  width: 97%;
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
  display: flex;

  > div {
    margin-right: 8px;
  }

  > div > span {
    color: #6a737c;
    margin-right: 5px;
  }
`;
