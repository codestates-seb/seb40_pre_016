import React from 'react';
import { Link } from 'react-router-dom';
import * as S from '../../style/common/SearchHint.style';

const SearchHint = ({ handleClickButton }) => {
  return (
    <S.FloatingPopup>
      <S.ListWarp>
        <S.ListWarpDiv>
          <S.List>
            <S.Text>
              [tag]<span>search within a tag</span>
            </S.Text>
          </S.List>
          <S.List>
            <S.Text>
              answers:0<span>unanswerd questions</span>
            </S.Text>
          </S.List>
          <S.List>
            <S.Text>
              user1234<span>search by author</span>
            </S.Text>
          </S.List>
          <S.List>
            <S.Text>
              score:3<span>post with a 3+ score</span>
            </S.Text>
          </S.List>
        </S.ListWarpDiv>
        <S.ListWarpDiv>
          <S.List>
            <S.Text>
              "words here"<span>expact phrase</span>
            </S.Text>
          </S.List>
          <S.List>
            <S.Text>
              is:question<span>type of post</span>
            </S.Text>
          </S.List>
          <S.List>
            <S.Text>
              collective:"Name"<span>collective content</span>
            </S.Text>
          </S.List>
          <S.List>
            <S.Text>
              isaccepted:yes<span>search withn status</span>
            </S.Text>
          </S.List>
        </S.ListWarpDiv>
      </S.ListWarp>
      <S.BtnWarp>
        <S.QnaBtn onFocus={handleClickButton}>Ask a question</S.QnaBtn>

        <S.P>Search help</S.P>
      </S.BtnWarp>
    </S.FloatingPopup>
  );
};

export default SearchHint;
