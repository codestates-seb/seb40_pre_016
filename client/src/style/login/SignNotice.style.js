import styled from "styled-components"

export const NoticeWarp = styled.div`
width: 411px;
margin: 0px 48px 128px 0px;
`
export const Notice = styled.h4`
    font-size: 27px;
    font-weight: 700;
    margin-bottom: 32px;
`
export const ListWrap = styled.ul`
width:100%;
`
export const List = styled.li`
width: 100%;
display: flex;
align-items: center;
margin-bottom: 24px;
& svg {
    margin-right: 10px;
    fill: var(--blue-500);
}
`
export const P = styled.p`
font-size: 15px;
`