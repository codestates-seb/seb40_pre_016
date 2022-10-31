import styled from "styled-components";

const User = styled.section`
    border: 1px solid black;
    width: 253.75px;
    height: 82px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    padding-left: 10px;
    border: 1px solid rgba(0,0,0,0.15);

    > a {
        font-size: 20px;
        color: #0A95FF;
        text-decoration: none;
    }
    
    > div {
        font-size: 12px;
        color: rgba(0,0,0,0.5);
    }
`


const UserComponents = () => {

    return (
        <>
            <User>
                <a href="user_id">User_id</a>
                <div>Email</div>
                <div>CreatedAt</div>
            </User>
        </>
    )
}

export default UserComponents;