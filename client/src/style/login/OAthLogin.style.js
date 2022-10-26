import styled from "styled-components"

export const Div = styled.div`
width : 100%;
`
export const SvgWarpDiv = styled.a`
display: block;
margin: 0 auto;
width: 32px;
height: 37px;
cursor: pointer;
`
export const ButtonWarp = styled.div`
width: 100%;
margin-top: 24px;
`
export const OAuthBtn = styled.button`
width: 100%;
border-radius: 5px;
border : 1px solid var(--dark-gray-color);
padding: 10px;
font-size: 12px;
background: ${(props) => props.background};
display: flex;
justify-content: center;
align-items: center;
cursor: pointer;

& svg {
    margin-right: 5px;
}
`