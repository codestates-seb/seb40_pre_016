import * as S from '../../../style/main/PageList.style'
import PageButton from "../Button/PageButton";
import { useRecoilState } from "recoil";
import { pageBtnIdx } from '../../../atoms/atom';

const PageList = () => {
  const [currentButton, setCurrentButton] = useRecoilState(pageBtnIdx);

  const btnCheckHandler = (idx) => {
    setCurrentButton(idx);
    console.log(currentButton)
  };

  const listCount = 5;
  const listCountArr = []
  for (let i = 1; i <= listCount; i++) {
    listCountArr.push(i);
  }

  return (
    <S.PageListContainerStyled>
      <S.PageListStyled>
        <PageButton width='50px'>Prev</PageButton>
        {listCountArr.map((el, idx) => {
          return (<PageButton
            key={idx}
            width='30px'
            onClick={() => btnCheckHandler(idx)}
            className={`default${currentButton === idx ? ' clicked' : ''}`}
          >{el}</PageButton>)
        })}
        <PageButton width='50px'>Next</PageButton>
      </S.PageListStyled >
    </S.PageListContainerStyled>
  );
};


export default PageList;