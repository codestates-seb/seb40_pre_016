import styled from "styled-components";

export const TagBox = styled.div`
    width: 166px;
    height: 84px;
    border: 1px solid rgba(0,0,0,0.15);
`

export const QCRTag = styled.section`
  margin-top: 20px;
  padding-left: 6px;
  border-radius: 10px;

  > span {
    border-radius: 3px;
    background-color: #E1ECF4;
    color: #39739D;
    font-size: 12px;
    padding: 4.8px 6px;
  }

  > p {
    padding-top: 20px;
    font-size: 12px;
    color: rgba(0, 0, 0, 0.5);
  }
`;

export const TagSection = styled.section`
  padding: 24px;
  > h1{
    font-size: 27px;
    margin: 0 0 20px 0;
  }
  > .tagText{
    font-size: 15px;
    width: 632px;
  }
  > .tagText2{
    margin-top: 5px;
    font-size: 15px;
    width: 632px;
  }
`;

export const TagsContainer = styled.section`
    display: flex;
    flex-wrap: wrap;
    margin-top: 10px;
    gap: 10px;
`