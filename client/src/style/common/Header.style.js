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
margin: 0 auto;
height: 50px;
display: flex;
align-items: center;
`
export const Logo = styled.a`
display: block;
width: 150px;
height: 40px;
cursor: pointer;
overflow: hidden;

& svg {
    position: relative;
    left: 1%;
    top: -1246%;
}
`
export const Product = styled.a`
display: block;
padding: 0 10px;
font-size: 13px;
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
`
export const LoginBtn = styled.button`
border-radius: 3px;
    border: 0px;
    padding: 2px 9px;
    transition: all 0.4s ease 0s;
    height: 32px;
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
    cursor: pointer;
    & a{
        display: block;
        color: white;
        text-decoration: none;
    }
    `