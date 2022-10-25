import styled from "styled-components";

export const Box = styled.div`
border-radius: 7px;
margin: 0 auto;
background-color: white;
max-width: 300px;
    padding: 24px;
    margin: 24px 0px;
    box-shadow: rgb(0 0 0 / 5%) 0px 10px 24px, rgb(0 0 0 / 5%) 0px 20px 48px, rgb(0 0 0 / 10%) 0px 1px 4px;
`
export const LinkWarp = styled.ul`
width: 100%;
padding-bottom: 8px;
border-bottom: 1px solid var(  --black-200);
`

export const LinkLi = styled.li`
display: flex;
align-items: center;
margin-bottom: 7px;
& img{
    width: 20px;
    height: 20px;
    margin-right: 5px;
}
& a {
text-decoration: none;
color:  var(--blue-600);
font-size: 14px;
    
}
`
export const CheckBox = styled.div`
width: 100%;
 display: flex;
 align-items: flex-start;
 margin-top: 5px;
 margin: 15px 0px;
 & input {
    margin-right: 8px;
 }
`
export const LabelWarp = styled.label`
cursor: pointer;
font-size: 12px;
`

export const LogoutBtn = styled.button`
cursor: pointer;
border-radius: 3px;
    border: 0px;
    padding: 2px 9px;
    transition: all 0.4s ease 0s;
    color: white;
    background-color: var(--blue-400);
    width: 70px;
    height: 35px;
    margin-right: 5px;
    cursor: pointer;
    &:hover{
        background-color: var(--blue-600);
    }
`
export const BtnWrap = styled.div`
    display: flex;
    width: 100%;

`

export const CancelBtn = styled.button`
border-radius: 3px;
    border: 0px;
    padding: 2px 9px;
    padding: 10px;
    transition: all 0.4s ease 0s;
    border: none;
    background-color: white;
    width: 70px;
    height: 35px;
    color: rgb(0, 116, 204);
    cursor: pointer;
    &:hover {
        background-color: var(--blue-050);
}
    
`

export const PTag = styled.p`
font-size: 13px;
margin-top: 32px;
color: var(--dark-font-color);
`