import styled from 'styled-components';
export const Container = styled.div`
width: 100%;
height: calc(100vh - 50px);
max-width: 1264px;
    margin: 0 auto;
    overflow: hidden;
`

export const LoginWarp = styled.div`
width: 300px;
max-width: 300px;
height: 100vh;
margin: 0 auto;
display: flex;
justify-content: center;
`
export const Div = styled.div`
width : 100%;
margin-top: 150px;
`


export const P = styled.p`
font-size: 13px;
display: block;
text-align: center;
margin: 0 auto;

`
export const Link = styled.a`
    color: rgb(0, 116, 204);
    margin-left: 8px;
    cursor: pointer;
    &:hover {
        text-decoration: underline;
    }
`