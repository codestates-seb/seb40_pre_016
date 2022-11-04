import styled from 'styled-components';

export const FloatingPopup = styled.div`
  width: calc(100% - 20px);
  position: absolute;
  padding: 15px 20px 10px;
  background-color: white;
  box-shadow: grey 0px 0px 5px;
  border-radius: 5px;
  top: 40px;
  left: 10px;
`;
export const ListWarp = styled.ul`
  width: 100%;
  display: flex;
  padding-bottom: 5px;
  border-bottom: 1px solid var(--black-200);
`;

export const List = styled.li`
  width: 100%;
`;

export const ListWarpDiv = styled.div`
  width: 100%;
`;

export const Text = styled.p`
  font-size: 13px;
  margin: 5px 0;
  & span {
    color: var(--black-400);
    margin-left: 8px;
  }
`;

export const BtnWarp = styled.div`
  display: flex;
  padding: 15px 0 5px;
  justify-content: space-between;
  align-items: center;
`;
export const QnaBtn = styled.button`
  width: 100px;
  border: 1px solid var(--powder-700);
  color: var(--powder-700);
  background-color: var(--powder-100);
  transition: 0.3s;
  height: 32px;
  border-radius: 3px;
  & :hover {
    background-color: var(--powder-300);
  }
`;
export const P = styled.p`
  cursor: pointer;
  font-size: 13px;
  color: var(--blue-600);
  & :hover {
    text-decoration: underline;
  }
`;
