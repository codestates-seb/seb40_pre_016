import React from "react";
import styled from 'styled-components';
import Filter from "../components/Users/UsersFilter";
import PageList from "../components/main/PageList/PageList";
import UserComponents from "../components/Users/UserComponent";


const UsersContainer = styled.section`
  width: 1300px;
  padding: 24px;
  > h1{
    font-size: 27px;
    margin: 0 0 20px 0;
  }
`;

const UserContainer = styled.section`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 10px;
  margin-top: 10px;
`

const Users = () => {


  return (
    <UsersContainer>
        <h1>Users</h1>
        <Filter />
        <UserContainer>
          <UserComponents />
          <UserComponents />
          <UserComponents />
          <UserComponents />
          <UserComponents />
          <UserComponents />
          <UserComponents />
          <UserComponents />
          <UserComponents />
          <UserComponents />
          <UserComponents />
          <UserComponents />
        </UserContainer>
        <PageList></PageList>
    </UsersContainer>
  );
};

export default Users;