import styled from "styled-components"

export const Box = styled.div`
max-width: 300px;
border-radius: 7px;
background-color: white;
    padding: 24px;
    margin: 24px 0px;
    box-shadow: rgb(0 0 0 / 5%) 0px 10px 24px, rgb(0 0 0 / 5%) 0px 20px 48px, rgb(0 0 0 / 10%) 0px 1px 4px;
`
export const P = styled.p`
font-size: 12px;

`
export const CheckBox = styled.div`
width: 100%;
 display: flex;
 align-items: flex-start;
 margin-top: 5px;
 & input {
    margin-right: 8px;
 }
`
export const LabelWarp = styled.label`
cursor: pointer;
font-size: 12px;
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
    margin-top: 12px;
    &:focus{
        outline: var(--blue-100) solid 4px;
    }
    &:hover {
    background-color: var(--blue-600);
    }
`