import React from "react";
import * as S from '../../style/tags/TagsComponents.style';


const TagsComponent = () => {
    
    return  (
        <S.TagsContainer>
            <S.TagBox>
                <S.QCRTag>
                    <span>JavaScript</span>
                    <p>2123123 Questions</p>
                </S.QCRTag>
            </S.TagBox>
        </S.TagsContainer>
    )
}

export default TagsComponent;