import React from "react";
import styled from "styled-components";

const QuestionEditSidebarContainer = styled.aside`
  width: 360px;
  height: 187px;
  border: 1px solid rgb(241, 229, 188);
  background-color: rgb(251, 243, 213);
  color: rgb(59, 64, 69);
  box-shadow: rgb(0 0 0 / 5%) 0px 1px 2px, rgb(0 0 0 / 5%) 0px 1px 4px,
    rgb(0 0 0 / 5%) 0px 2px 8px;
  margin-top: 20px;
  & .sidebar-header {
    padding: 12px 15px;
    border-bottom: 1px solid rgb(241, 229, 188);
    font-size: 15px;
  }

  & .sidebar-body {
    padding: 4px 15px;
    background-color: rgb(250, 245, 230);

    > li {
      margin: 12px 0px;
      font-size: 13px;
      list-style: inside;
    }
  }
`;

const QuestionEditSidebar = () => {
  return (
    <QuestionEditSidebarContainer>
      <div className="sidebar-header">How to Edit</div>
      <ol className="sidebar-body">
        <li>Correct minor typos or mistakes</li>
        <li>Clarify meaning without changing it</li>
        <li>Add related resources or links</li>
        <li>Always respect the author’s intent</li>
        <li>Don’t use edits to reply to the author</li>
      </ol>
    </QuestionEditSidebarContainer>
  );
};

export default QuestionEditSidebar;
