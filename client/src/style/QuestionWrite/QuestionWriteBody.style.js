import styled from "styled-components";


export const QuestionBodyContainer = styled.div`
display: flex;
flex-direction: column;
gap: 10px;
box-shadow: grey 0px 0px 3px;
border-radius: 3px;
padding: 20px;
flex-basis: 785px;
background-color: white;

& h1{
  font-size: 15px;
  margin-bottom: 6px;
}

& p{
  color:  hsl(210,8%,35%);
  font-size: 13px;
  margin-bottom: 7px;
}

& input{
  width: 100%;
  margin-bottom: 10px;
  padding : 8px 10px;
}


`;