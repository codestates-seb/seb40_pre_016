import React from "react";
import styled from 'styled-components';
import Filter from "../components/Tags/TagsFilter";
import PageList from "../components/main/PageList/PageList";
import TagComponent from "../components/Tags/TagComponent";


const TagContainer = styled.section`
  width: 1100px;
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

const TagsContainer = styled.section`
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    margin-top: 10px;
    gap: 10px;
`


const Tags = () => {


  return (
    <TagContainer>
        <h1>Tags</h1>
        <div className='tagText'>A tag is a keyword or label that categorizes your question with other, similar questions.</div>
        <div className='tagText2'>Using the right tags makes it easier for others to find and answer your question.</div>
        <Filter />
        <TagsContainer>
          <TagComponent />
          <TagComponent />
          <TagComponent />
          <TagComponent />
          <TagComponent />
          <TagComponent />
          <TagComponent />
          <TagComponent />
          <TagComponent />
          <TagComponent />
          <TagComponent />
          <TagComponent />
          <TagComponent />
          <TagComponent />
          <TagComponent />
          <TagComponent />
        </TagsContainer>
        <PageList></PageList>
    </TagContainer>
  );
};

export default Tags;