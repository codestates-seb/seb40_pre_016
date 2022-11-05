import { Link, useParams } from "react-router-dom";
import styled from "styled-components";
import { timeCal } from "../../pages/Question";

const User = styled.section`
    border: 1px solid black;
    width: 253.75px;
    height: 82px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    padding-left: 10px;
    border: 1px solid rgba(0,0,0,0.15);
    & a{
        color: #0A95FF;
        text-decoration: none;
    }

    & p {
        font-size: 20px;
        color: #0A95FF;
        text-decoration: none;
    }
    
    & div {
        font-size: 12px;
        color: rgba(0,0,0,0.5);
    }
`


const UserComponents = ({ userId, username, email, createdAt }) => {

    let prarams = useParams()
    return (
        <>
            <User>
                <Link to={`/users/${userId}/profile`}>
                    <p>{username}</p>
                    <div>{email}</div>
                    <div>{timeCal(createdAt)}</div>
                </Link>
            </User>
        </>
    )
}

export default UserComponents;