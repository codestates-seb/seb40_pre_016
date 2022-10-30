import React from "react";
import styled from 'styled-components';
import Filter from "../components/Tags/TagsFilter";
import PageList from "../components/main/PageList/PageList";


const UsersContainer = styled.section`
  width: 1100px;
  padding: 24px;
  > h1{
    font-size: 27px;
    margin: 0 0 20px 0;
  }
`;



const Users = () => {


  return (
    <UsersContainer>
        <h1>Users</h1>
        <Filter />
        <PageList></PageList>
    </UsersContainer>
  );
};

export default Users;