import styled from "styled-components"

export const UserPageContainer = styled.div`
width: 1300px;
padding: 24px;
height: calc(100vh - 372px);
`
export const UserNameCard = styled.div`
width: 100%;
display: flex;
align-items: center;
position: relative;
margin-bottom:  24px;
`
export const UserImg = styled.img`
width: 128px;
height:128px;
border-radius: 5px;
`
export const UserNameWrap = styled.div`
width: calc(100% - 64px);
padding:10px;
`

export const UserName = styled.p`
font-size:34px;
margin: 0 0 8px ;
`

export const SignDay = styled.p`
font-size: 13px;
color: var(--black-500);
display: flex;
align-items: center;
& svg {
    fill: var(--black-500);
    margin-right: 5px;
}

`
export const ButtonWarp = styled.div`
position: absolute;
top: 0;
right: 0;
display: flex;

`
export const Button = styled.button`
cursor: pointer;
background-color: transparent;
border: 1px solid var(--black-300);
color: var(--black-500);
display: flex;
align-items: center;
font-size: 13px;
border-radius: 3px;
padding: 9px;
& svg{
    fill: var(--black-500);
    margin-right: 5px;
}
&.logout{
    background-color: var(--powder-200);
    color: var(--powder-700);
    transition: 0.3s;
    border: none;
    margin-left: 5px;
}
`

export const ProfileTab = styled.div`
width: 100%;
`
export const ProfileBtn = styled.button`
background: var(--theme-primary-color);
    color: white;
    border: none;
    border-radius: 20px;
    padding: 6px 12px;
    cursor: pointer;
`
export const AboutTab = styled.div`
width: 100%;
margin: 24px 0 ;
`
export const AboutHead = styled.p`
font-size: 24px;
margin-bottom: 8px;
`
export const AboutCompo = styled.div`
padding: 48px 32px;
background-color: var(--black-025);
border: 1px solid var(--black-100);
border-radius: 5px;
margin-top: 15px;
`
export const AboutP = styled.p`
font-size: 13px;
color: var(--black-500);
text-align: center;
line-height: 1.5;
& a {
    color: var(--blue-500);
    text-decoration: none;
}
`