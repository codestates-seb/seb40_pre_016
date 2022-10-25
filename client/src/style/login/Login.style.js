import styled from 'styled-components';
export const Container = styled.div`
width: 100%;
height: 100vh;
max-width: 1264px;
    margin: 0 auto;
    padding: 24px;
`

export const LoginWarp = styled.div`

max-width: 300px;
height: 100vh;
margin: 0 auto;
display: flex;
justify-content: center;
align-items: center;
`
export const Div = styled.div`
width : 100%;
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