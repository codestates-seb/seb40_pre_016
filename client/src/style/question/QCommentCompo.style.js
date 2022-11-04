import styled from 'styled-components';

// 답변
export const QComment = styled.section`
  margin-top: 15px;
  padding-bottom: 10px;
  border-bottom: 1px solid rgba(0,0,0,0.2);
`;

export const QCHeader = styled.section`
  height: 71px;
  display: flex;
  justify-content: space-between;
  padding: 20px 0px 10px 10px;
  > h2 {
    font-size: 20px;
    font-weight: 400;
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
    font-size: 25px;
    margin-bottom: 2px;
  }

  > img {
    margin-top: 10px;
    width: 30px;
    height: 15px;

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
  margin-top: 10px;
  > button {
    margin-right: 10px;
    color: rgba(0, 0, 0, 0.6);
    cursor: pointer;
    background-color: white;
    border: none;
  }
  > a > button {
    margin-right: 10px;
    color: rgba(0, 0, 0, 0.6);
    cursor: pointer;
    background-color: white;
    border: none;
  }
`;

export const QCRERight = styled.section`
  margin-top: 10px;
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

export const CommentSection = styled.div`
  border-top: 1px solid rgba(0,0,0,0.10);
  border-bottom: 1px solid rgba(0,0,0,0.10);
  
  > div {
    padding: 3px 0px 3px 10px;
    font-size: 13px;
    > div{
      margin-left: 5px;
      display: inline;
      > a{
        margin-left: 5px;
        text-decoration: none;
        color: #0c62ed;
      }
    }
    
    > span {
      margin-left: 5px;
      font-size: 13px;
      color: rgba(0,0,0,0.45);;
    }

    > button {
      margin-left: 5px;
      border: none;
      background-color: white;
      cursor: pointer;
    }
  }
  `

export const QCRComment = styled.section`
  margin-top: 20px;
  margin-left: 8px;
  margin-bottom: 10px;
  > button {
    border: none;
    background-color: white;
    font-size: 12px;
    color: rgba(0, 0, 0, 0.4);
    cursor: pointer;
  }
`;