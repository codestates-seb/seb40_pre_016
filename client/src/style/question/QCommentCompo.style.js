import styled from "styled-components";

// 답변
export const QComment = styled.section`
  margin-top: 15px;
  margin-bottom: 15px;
`;

export const QCHeader = styled.section`
  height: 71px;
  display: flex;
  justify-content: space-between;
  padding: 20px 0px 20px 10px;
  > h2 {
    font-size: 20px;
    font-weight: 600;
  }
  > div {
    font-size: 12px;
  }
  > div > select {
    margin-left: 10px;
    height: 30px;
    background-color: #efefef;
    border-radius: 3px;
  }
`;

export const QContent = styled.section`
  margin-top: 15px;
  display: flex;
`;

export const QContentLeft = styled.section`
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
    :last-child {
      rotate: 180deg;
    }
  }
`;

export const QContentRight = styled.section`
  width: 93%;

  > div {
    margin-top: 10px;
    margin-left: 8px;
  }
`;

export const QCREdit = styled.section`
  margin-top: 10px;
  margin-left: 8px;
  display: flex;
  justify-content: space-between;
`;

export const QCRELeft = styled.section`
  > button {
    margin-right: 10px;
    color: rgba(0, 0, 0, 0.6);
    cursor: pointer;
    background-color: white;
    border: none;
  }
`;

export const QCRERight = styled.section`
  margin-right: 10px;
  padding-top: 5px;
  padding-bottom: 10px;
  padding-left: 7px;
  background-color: #d3ebf8;
  width: 150px;
  border-radius: 5px;

  > span {
    font-size: 10px;
  }

  > div {
    margin-top: 10px;
    display: flex;
    align-items: center;
  }

  > div > img {
    width: 20px;
    right: 20px;
  }

  > div > span {
    margin-left: 15px;
    color: #39739d;
  }
`;

export const QCRComment = styled.section`
  margin-left: 8px;
  font-size: 12px;
  color: rgba(0, 0, 0, 0.5);
  margin-bottom: 10px;
`;
