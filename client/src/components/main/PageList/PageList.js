import * as S from '../../../style/main/PageList.style';
import PageButton from '../Button/PageButton';
import { useRecoilState } from 'recoil';
import {
  pageBtnIdx,
  pageLocation,
  pagenationCount,
  pagesizeCount,
  tagNoneMessage,
} from '../../../atoms/atom';
import { useAxios } from '../../../util/useAxios';
import { useEffect } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';

const PageList = ({ location, child }) => {
  const [currentButton, setCurrentButton] = useRecoilState(pageBtnIdx);

  //pagenation 카운트
  const [listCount, setListCount] = useRecoilState(pagenationCount);
  //한페이지에 들어갈 tag 개수
  const [SizeCount, setSizeCount] = useRecoilState(pagesizeCount);
  const [message, setMessage] = useRecoilState(tagNoneMessage);

  const { response, loading, error } = useAxios({
    method: 'GET',
    url: `api/${location}?page=0&size=1`,
  });

  useEffect(() => {
    if (response) {
      //현재 있는 데이터가 기본 설정 데이터보다 작을 경우
      if (response.pageInfo.totalElements < SizeCount[`${location}`]) {
        setSizeCount({
          ...SizeCount,
          [location]: response.pageInfo.totalElements,
        });
        setListCount({ [location]: 1 });
      } else {
        setListCount({
          ...listCount,
          [location]: Math.ceil(
            response.pageInfo.totalElements / SizeCount[`${location}`]
          ),
        });
      }
    }
  }, [response]);

  useEffect(() => {
    if (response) {
      if (response.pageInfo.totalElements === 0) {
        setMessage({ ...message, [location]: `no ${location}` });
        setListCount({
          ...listCount,
          [location]: 1,
        });
      }
    }
  }, [response, SizeCount]);

  //navi 새로고침문제 해결
  const navigate = useNavigate();
  const goPage = (idx, location, e) => {
    navigate(`/${location}/page=${idx + 1}`);
    window.location.reload();
  };

  const listCountArr = [];
  for (let i = 1; i <= listCount[`${location}`]; i++) {
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
              <NavLink
                width='30px'
                onClick={(e) => goPage(idx, location, e)}
                to={`/${location}/page=${idx + 1}`}
              >
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
