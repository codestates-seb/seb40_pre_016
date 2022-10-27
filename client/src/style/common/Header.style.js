import styled from 'styled-components';

export const HeaderContainer = styled.header`
width: 100%;
height: 50px;
position: fixed;
background-color: var(--black-025);
    box-shadow: 0px 1px 2px var(--black-100);
    z-index: 2;
    &::before{
        display: block;
    position: absolute;
    top: 0%;
    content: "";
    width: 100%;
    height: 3px;
    background-color: var(--orange-400);
    z-index: 2;
    }
`
export const Container = styled.div`
max-width: 1400px;
padding: 0 10px;
margin: 0 auto;
height: 50px;
display: flex;
justify-content: space-between;
align-items: center;
margin-top: 2px;
`
export const Logo = styled.div`

cursor: pointer;
overflow: hidden;
& a{

width: 150px;
height: 40px;
    display: block;
    cursor: pointer;
    overflow: hidden;
    text-decoration: none;
}
& svg {
    position: relative;
    left: 1%;
    top: -1246%;
}
@media screen and (max-width: 640px) {
        & a{
            width: 35px;
            height: 40px;
        }
        & svg {    left: 18%;}
    }
`
export const Product = styled.a`
display: block;
padding: 0 10px;
font-size: 13px;
@media screen and (max-width: 980px) {
    &.mList{
        display: none;    
    }
    }

  
`
export const SearchCopo = styled.div`
padding : 0 10px;
position: relative;
height: 32px;
width: calc(100% - 470px);
& input {
    width: 100%;
height: 32px;
padding-left: 27px;
    border: 1px solid var( --black-200);
    border-radius: 3px;
}
& svg{
    position: relative;
    top: -16px;
    fill: darkgray;
    transform: translateY(-50%);
    left: 6px;
}
@media screen and (max-width: 980px) {
    width: calc(100% - 350px); 
    }
    @media screen and (max-width: 640px) {
   display : none;
    }
`
export const LoginBtn = styled.button`
border-radius: 3px;
    border: 0px;
    padding: 2px 9px;
    transition: all 0.4s ease 0s;
    height: 32px;
    width: 55px;
    & a{
        display: block;
        color: var(--powder-700);
        text-decoration: none;
    }
    color: var(--powder-700);
    background-color: var(--powder-200);
    margin: 0 2px;
    cursor: pointer;
    `
export const SignupBtn = styled.button`
border-radius: 3px;
    border: 0px;
    padding: 2px 9px;
    transition: all 0.4s ease 0s;
    height: 32px;
    color: white;
    background-color: var(--blue-400);
    margin: 0 2px;
        width: 63px;
    cursor: pointer;
    & a{
        display: block;
        color: white;
        text-decoration: none;
    }
    `

export const MHamberBtn = styled.button`
display: none;
   cursor: pointer;
   position: relative;
    width: 25px;
    height: 18px;
    flex-flow: row wrap;
    align-items: center;
    border: none;
    background-color: transparent;
    padding-right: 5px;
    & span:nth-child(2){
        margin-top: 3px;
    margin-bottom: 3px;
    }
    @media screen and (max-width: 640px) {
        display: block;
    }
   `
export const SpanLine = styled.span`
      display: block;
    position: relative;
    width: 70%;
    height: 2px;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: var(--black-600);
    transition: all 0.4s ease 0s;
      `
export const SearchBtnWarp = styled.div`
 display: none;
 width: calc(100% - 250px);
 height: 50px;
 @media screen and (max-width: 640px) {
    display: block;
   
    position: relative;
 }
`
export const SearchBtn = styled.button`
      cursor: pointer;
     position: absolute;
     right: 10px;
     top: 50%;
     transform: translateY(-50%);
      background-color: transparent;
      border: none;
        display: flex;
        align-items: center;
    
      `