import styled from "styled-components";

// 콘텐츠 사이드바
export const RightSidebar = styled.section`
    margin-top: 24px;
    background-color: white;
`;

export const YBox = styled.ul`
    width: 260px;
    min-height: 120px;
    list-style: inside;
    background-color: #FAF5E6;
    margin-left: 35px;
    box-shadow: rgba(0,0,0,0.3) 0px 1px 1px 1px;
    
    > li{
        padding-left: 10px;
        padding-top: 3px;
        padding-bottom: 7px;
        font-size: 13px;

        :first-child {
            height: 30px;
            padding-top: 10px;
            padding-left: 10px;
            margin-bottom: 5px;
            background-color: #FBF3D5;
            color: #525960;
            font-size: 12px;
            font-weight: 600;
            list-style-type: none;
        }

        :last-child{
            padding-bottom: 15px;
        }
    }
`