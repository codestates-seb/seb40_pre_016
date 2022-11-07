import React from 'react';
import * as S from '../../../style/main/Filter.style';
import SelectButton from '../Button/SelectButton';
import { useAxios } from '../../../util/useAxios';
const Filter = () => {
  const buttonNameList = ['createdAt', 'voteCount'];
  const { response, loading, error } = useAxios({
    method: 'GET',
    url: `api/questions?page=0&size=1`,
  });

  return (
    <S.FilterContainer>
      <h1>
        <p>{response && response.pageInfo.totalElements} questions</p>
      </h1>
      <div>
        {buttonNameList.map((el, idx) => (
          <SelectButton key={idx} value={el}>
            {el}
          </SelectButton>
        ))}
      </div>
    </S.FilterContainer>
  );
};

export default Filter;
