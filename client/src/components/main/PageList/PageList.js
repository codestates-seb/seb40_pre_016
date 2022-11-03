import * as S from '../../../style/main/PageList.style';
import PageButton from '../Button/PageButton';
import { useRecoilState, useRecoilValue } from 'recoil';
import { pageBtnIdx, pageLocation, pagenationCount, pagesizeCount, tagNoneMessage } from '../../../atoms/atom';
import { useAxios } from '../../../util/useAxios';
import { useEffect, useState } from 'react';
import { NavLink, useNavigate, useParams } from 'react-router-dom';

const PageList = ({ location, child }) => {
  const [currentButton, setCurrentButton] = useRecoilState(pageBtnIdx);

  //pagenation 카운트
  const [listCount, setListCount] = useRecoilState(pagenationCount);
  //한페이지에 들어갈 tag 개수
  const [SizeCount, setSizeCount] = useRecoilState(pagesizeCount)
  const [message, setMessage] = useRecoilState(tagNoneMessage)

  console.log(location)
  const { response, loading, error } = useAxios({
    method: 'GET',
    url: `api/${location}`,
  })

  response && console.log(response)
  if (response) {
    //response 없을경우
    if (response[child].length === 0) {
      setMessage(`no ${location}`)
      setListCount(1)
    }


  }
  useEffect(() => {
    if (response) {
      //현재 있는 데이터가 기본 설정 데이터보다 작을 경우

      console.log(location, 'data length', response)
      if (response[child].length < SizeCount) {
        setSizeCount(response[child].length)
      }
      setListCount(Math.ceil(response[child].length / SizeCount))
    }
  }, [response])

  //navi 새로고침문제 해결
  const navigate = useNavigate()
  const goPage = (idx, location, e) => {

    navigate(`/${location}/${idx + 1}`)
    window.location.reload()
  }

  const listCountArr = [];
  for (let i = 1; i <= listCount; i++) {
    listCountArr.push(i);
  }

  return (
    <S.PageListContainerStyled>
      <S.PageListStyled>
        <PageButton width='50px'>Prev</PageButton>
        {listCountArr.map((el, idx) => {
          return (
            <PageButton
              key={idx}
              width='30px'

              className={`default${currentButton === idx ? ' clicked' : ''}`}
            >
              <NavLink width='30px' onClick={(e) => goPage(idx, location, e)} to={`/${location}/${idx + 1}`} >
                {el}
              </NavLink>
            </PageButton>
          );
        })}
        <PageButton width='50px'>Next</PageButton>
      </S.PageListStyled>
    </S.PageListContainerStyled>
  );
};

export default PageList;
