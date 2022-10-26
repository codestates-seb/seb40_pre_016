import styled from "styled-components";

// 콘텐츠 사이드바
export const RightSidebar = styled.section`
    margin-top: 10px;
    width: 300px;
    background-color: white;

`;

export const YBox = styled.ul`
    width: 260px;
    min-height: 120px;
    list-style: inside;
    background-color: #FAF5E6;
    margin-left: 10px;
    box-shadow: rgba(0,0,0,0.3) 0px 1px 1px 1px;
    
    > li{
        padding-left: 10px;
        font-size: 13px;
        margin-top: 5px;
        margin-bottom: 12px;

        :first-child {
            list-style-type: none;
            height: 30px;
            font-size: 12px;
            font-weight: 600;
            background-color: #FBF3D5;
            color: 525960;
            padding-top: 10px;
            padding-left: 20px;
        }

        :last-child{
            padding-bottom: 20px;
        }
    }
`