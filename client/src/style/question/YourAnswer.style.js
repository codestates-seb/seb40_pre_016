import styled from "styled-components";

// 답변 추가
export const QYourAnswer = styled.section`
  margin-top: 30px;
  margin-left: 20px;
  margin-bottom: 70px;



  > form > h3 {
    font-size: 20px;
    font-weight: 500;
    margin-bottom: 30px;
  }

  > form > button {
    margin: 30px 0px;
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

export const EditorBox = styled.div`
    margin-right: 10px;
    width: 810px;
    border: ${(props) => (props.check ? "var(--blue-300) solid 1px" : "none")};
    outline: ${(props) => (props.check ? "var(--blue-100) solid 4px" : "none")};
    .toastui-editor-tooltip {
      > span {
        color: white;
      }
    }
`