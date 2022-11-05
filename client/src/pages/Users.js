import React from "react";
import styled from 'styled-components';
import Filter from "../components/Users/UsersFilter";
import PageList from "../components/main/PageList/PageList";
import UserComponents from "../components/Users/UserComponent";
import { useRecoilValue } from "recoil";
import { pagesizeCount, tagNoneMessage } from "../atoms/atom";
import { useParams } from "react-router-dom";
import { useAxios } from "../util/useAxios";


const UsersContainer = styled.section`
  min-height: 566px;
  width: 100%;
  padding: 24px;
  > h1{
    font-size: 27px;
    margin: 0 0 20px 0;
  }
`;

const UserContainer = styled.section`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-top: 10px;
`

const Users = () => {
  const message = useRecoilValue(tagNoneMessage)
  const size = useRecoilValue(pagesizeCount);

  let params = useParams()
  const { response, loading, error } = useAxios({
    method: 'GET',
    url: `api/users?page=${params.userspage - 1}&size=${size.users}`,
  })

  return (
    <UsersContainer>
      <h1>Users</h1>
      <Filter />
      <UserContainer>
        {
          loading ? null :
            <>
              {
                message.length !== 0 ? <p>{message}</p> : response.data.map(el => <UserComponents key={el.id} username={el.username} email={el.email} createdAt={el.createdAt} userId={el.userId} />)
              }
            </>
        }
        {error ? error.message : null}
      </UserContainer>
    </UsersContainer>
  );
};

export default Users;