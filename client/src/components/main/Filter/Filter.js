import React from 'react';
import * as S from '../../../style/main/Filter.style';
import SelectButton from '../Button/SelectButton';
import { useRecoilState } from 'recoil';
import { questionList } from '../../../atoms/atom';
import { filterBtnIdx } from '../../../atoms/atom';

const Filter = () => {
  // const [currentBtn, setCurrentButton] = useRecoilState(filterBtnIdx);
  const buttonNameList = ['createdAt', 'voteCount'];

  return (
    <S.FilterContainer>
      <h1>
        <p>23,143,715 questions</p>
      </h1>
      <div>
        {buttonNameList.map((el, idx) => (
          <SelectButton
            key={idx}
            value={el}
            // onClick={(e) => btnCheckHandler(e, idx)}
            // className={`default${currentBtn === idx ? ' clicked' : ''}`}
          >
            {el}
          </SelectButton>
        ))}
      </div>
    </S.FilterContainer>
  );
};

export default Filter;
