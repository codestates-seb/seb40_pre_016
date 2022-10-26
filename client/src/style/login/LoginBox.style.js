import styled from "styled-components"

export const Box = styled.div`
border-radius: 7px;
background-color: white;
height: 260px;
    padding: 24px;
    margin: 24px 0px;
    box-shadow: rgb(0 0 0 / 5%) 0px 10px 24px, rgb(0 0 0 / 5%) 0px 20px 48px, rgb(0 0 0 / 10%) 0px 1px 4px;
`

export const InputWrap = styled.div`
    width: 100%;
    margin-bottom: 10px;
    & p {color: var(--warning-color); font-size:11px}
    
`
export const Label = styled.label`
display: block;
font-size: 14px;
font-weight: 700;
margin-bottom: 6px;
font-size: 15px;
`
export const Input = styled.input`

padding: 8px 10px;
    margin-bottom: 10px;
    width: 100%;
    height: 35px;
    border: 1px solid var(--dark-gray-color);
    border-radius: 3px;
    &:focus {
        border-color: var(--blue-300);
    outline: var(--blue-100) solid 4px;
    }
    &.rejectInput {
        border: 1px solid rgb(222, 79, 84);
    border-radius: 3px;
    outline: rgb(249, 210, 211) solid 4px;
    }
`
export const FloatingIcon = styled.div`
    position: absolute;
    width: 20px;
    height: 20px;
    top: 9px;
    right: 10px;
    & svg{
        fill: var(--warning-color);
    }
`
export const InputPosition = styled.div`
width: 100%;
height: 57px;
position: relative;
`

export const SubmitBtn = styled.button`
border-radius: 3px;
    border: 0px;
    padding: 2px 9px;
    width: 100%;
    background-color: var(--blue-400);
    height: 35px;
    transition: all 0.4s ease 0s;
    font-size: 13px;
    color: white;
    &:focus{
        outline: var(--blue-100) solid 4px;
    }
    &:hover {
    background-color: var(--blue-600);
    }
`