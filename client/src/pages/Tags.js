import React, { useCallback, useEffect } from "react";
import Filter from "../components/Tags/TagsFilter";
import PageList from "../components/main/PageList/PageList";
import TagComponent from "../components/Tags/TagComponent";
import * as S from "../../style/tags/TagComponents.style";
import axios from "axios";


const Tags = () => {
  const getTags = useCallback(async () => {
    await axios({
      url: `tags?page={page}&size={size}`,
      headers: {
        "ngrok-skip-browser-warning": "111",
      },
      method: 'GET',
    }).then(res => console.log(res.data))

  }, []);

  useEffect(() => {
    getTags();
  }, [getTags]);

  return (
    <S.TagSection>
        <h1>Tags</h1>
        <div className='tagText'>A tag is a keyword or label that categorizes your question with other, similar questions.</div>
        <div className='tagText2'>Using the right tags makes it easier for others to find and answer your question.</div>
        <Filter />
        <S.TagsContainer>
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
        </S.TagsContainer>
        <PageList></PageList>
    </S.TagSection>
  );
};

export default Tags;