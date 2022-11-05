import React, { useCallback, useEffect } from "react";
import Filter from "../components/Tags/TagsFilter";
import TagComponent from "../components/Tags/TagComponent";
import * as S from "../style/tags/TagComponents.style";
import axios from "axios";
import { useLocation, useParams } from "react-router-dom";
import { useAxios } from "../util/useAxios";
import { useState } from "react";
import { useRecoilValue } from "recoil";
import { pagesizeCount, tagNoneMessage } from "../atoms/atom";


const Tags = () => {
  const size = useRecoilValue(pagesizeCount);
  const message = useRecoilValue(tagNoneMessage)


  let params = useParams()
  const { response, loading, error } = useAxios({
    method: 'GET',
    url: `api/tags?page=${params.tagspage - 1}&size=${size.tags}`,
  })


  return (
    <S.TagSection>
      <h1>Tags</h1>
      <div className='tagText'>A tag is a keyword or label that categorizes your question with other, similar questions.</div>
      <div className='tagText2'>Using the right tags makes it easier for others to find and answer your question.</div>
      <Filter />
      <S.TagsContainer>
        {
          loading ? null :
            <>
              {
                message.tags ? <p>{message.tags}</p> : response.data.map(el => <TagComponent key={el.tagId} name={el.name} count={el.questionCount} />)
              }
            </>


        }
        {error ? error.message : null}
      </S.TagsContainer>
    </S.TagSection>
  );
};

export default Tags;