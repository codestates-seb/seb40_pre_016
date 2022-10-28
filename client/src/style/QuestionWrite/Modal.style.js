import styled from "styled-components";


export const ModalBack = styled.div`
  background-color: rgba(60, 60, 60, 0.643);
  position: fixed;
  height: 100vh;
  width: 100%;
  z-index: 100;
`;

export const ModalSelect = styled.div`

`;


export const ModalContainer = styled.div`
  width: 450px;
  height: 435px;
  padding: 25px;
  border-radius: 10px;
  position: fixed;
  left: 38%;
  top: 25%;
  z-index: 100;
  background-color: #FFFFFF;
  border: 0px;
  display: flex;
  flex-direction: column;

  font-weight: 400;
  font-size: 15px;

  line-height  : 20px;

  transition: all 0s ease 0s;
& .cancel{
  background-color : transparent;
  border: none;
  font-size: 20px;
  font-weight: 700;

  position: absolute;
  left: 420px;
  top: 10px;
  
  cursor: pointer;
}

  & h1{
  flex-grow: 1; 
  font-size : 24px;
  margin-bottom: 15px;
  font-weight: bold;
  }

  & p{
    margin-bottom: 20px;
    flex-grow: 1; 
  }
  & a{
    color: #0A95FF;
    text-decoration: none;
  }
  & .last_p{
    font-size: 13px;
    color: #6A737C;
    flex-grow: 1; 
  }

  & ul{
    margin : 25px 0;
    padding-left: 20px;
    display: flex;
    flex-direction: column;
    gap: 10px;
    flex-grow: 1; 
  }

  & footer{
    display: flex;
    gap: 0px 17px;
    padding: 5px 10px;
    flex-grow: 1; 

  }

  & .startWriting{
    height: 38px;
    width: 92px;
    color: white;
    background-color: #379FEF;
    font-size: 13px;
    text-align: center;
    border-radius: 3px;
    border: 0px;
    cursor: pointer;
  }

  & .dontShow{
    width:170px;
    height: 38px;
    background-color: white;
    color: #379FEF;
    font-size: 13px;
    text-align: center;
    border-radius: 3px;
    border: 0px;
    cursor: pointer;
  }
`;

