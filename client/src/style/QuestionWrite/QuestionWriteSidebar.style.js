import styled from "styled-components";


export const QuestionWriteSidebarContainer = styled.aside`
  display: flex;
  flex-direction: column;
  gap: 30px;
  width: 430px;
  

  & .side1-container{
    display: flex;
    flex-direction: column;
    
    box-shadow: grey 0px 0px 3px;
    border-radius: 3px;

  }

  & .side1-title-container{
    font-size: 19px;
    padding: 12px;
    background-color: #F8F9F9;
    
    > h1{
      color: #6A737C
    }
  }

  & .side1-body-content{
    padding: 15px;
    display: flex;
    flex-direction: column;
    font-size: 14px;
    gap: 15px;
    background-color: white;
  }

  & .side1-body-accordion-container{
    font-size: 13px;
    font-weight: bold;
    padding: 12px;
    background-color: white;

    > div{
      display: flex;

      > div{
        margin-left : auto;
      }
    }
  }



  & .side2-container{
    box-shadow: grey 0px 0px 3px;
    border-radius: 3px;
    padding: 12px;
    background-color: #F8F9F9;

    > h1{
      color: #6A737C
    }
  }

  & .side3-container{
    box-shadow: grey 0px 0px 3px;
    border-radius: 3px;
    padding: 12px;
    background-color: #F8F9F9;
    > h1{
      color: #6A737C
    }
  }
  

`;