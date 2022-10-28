import styled from "styled-components";


export const QuestionBodyContainer = styled.div`
display: flex;
flex-direction: column;
gap: 10px;
box-shadow: grey 0px 0px 3px;
border-radius: 3px;
padding: 20px;
flex-basis: 800px;
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

& .tagInput-container{
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 10px;

  > ol{
    display: flex;
  }
}

& .tag-container{
  display: flex;
  color: #39739D;
  background-color: #E1ECF4;
  padding: 4.8px 6px;
  margin: 2px;
  gap: 5px;
  border-radius: 3px;
  }

& .tag-name{
  display: flex;
  justify-content: center;
  align-items: center;
  color: #39739D;
  font-size: 12px;
  white-space: nowrap;
  }

& .tagInput-button{
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 10px;

  color: #39739D;
  background-color: #E1ECF4;
  border: none;
  }
  
& .tag-input{
  margin-bottom: 0px;
}

`;