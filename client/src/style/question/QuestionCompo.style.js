import styled from 'styled-components';

// QuestionCompo
export const QContent = styled.section`
  margin-top: 15px;
  padding-bottom: 10px;

  display: flex;
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
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
    padding-left: 8px;
  }
`;

export const QCRTag = styled.section`
  padding-top: 10px;
  padding-bottom: 15px;
  border-radius: 10px;

  > span {
    margin-right: 7px;
    border-radius: 3px;
    background-color: #d0e3f1;
    color: #39739d;
    font-size: 12px;
    padding: 4.8px 6px;
  }
`;

export const QCREdit = styled.section`
  margin-left: 8px;
  display: flex;
  justify-content: space-between;
`;

export const QCRELeft = styled.section`
  > a > button {
    margin-right: 10px;
    color: rgba(0, 0, 0, 0.6);
    cursor: pointer;
    background-color: white;
    border: none;
  }

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
  > div > a {
    text-decoration: none;
  }

  > div > a > span {
    margin-left: 15px;
    color: #39739d;
  }
`;

export const CommentSection = styled.div`
  border-top: 1px solid rgba(0, 0, 0, 0.15);
  border-bottom: 1px solid rgba(0, 0, 0, 0.15);

  > div {
    padding: 15px 0px 15px 10px;
    font-size: 13px;
    > div {
      display: inline;
      > a {
        text-decoration: none;
        color: #0c62ed;
      }
    }

    > span {
      margin-left: 5px;
      font-size: 13px;
      color: rgba(0, 0, 0, 0.45);
    }
  }
`;

export const QCRComment = styled.section`
  margin-top: 10px;
  margin-bottom: 10px;

  > button {
    border: none;
    background-color: white;
    font-size: 12px;
    color: rgba(0, 0, 0, 0.4);
    cursor: pointer;
  }
`;
