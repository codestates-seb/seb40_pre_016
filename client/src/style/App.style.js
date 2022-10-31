import styled from 'styled-components';

export const BackGround = styled.div`
  background-color: var(--background-color);
  width: 100%;
  height: auto;
  overflow: hidden;
`;
export const Container = styled.div`
  width: 100%;
  padding: 50px 0px 0;
  display: flex;
  justify-content: center;
  background-color: white;
  &.auth_on {
    background-color: var(--black-050);
  }
`;

export const RightContainer = styled.div`
  display: flex;
  max-width: 1300px;
`;
