import styled from 'styled-components';

export const FooterContainer = styled.footer`
  height: 322px;
  background-color: #232629;
  display: flex;
  justify-content: center;
`;

export const FooterBox = styled.section`
  max-width: 1264px;
  width: 100%;
  padding-top: 23px;
  padding-left: 13px;
  display: flex;
`;

export const LogoBox = styled.section`
  width: 5%;
`;

export const Slogo = styled.a`
  display: block;
  width: 32px;
  height: 40px;
  scale: 1.24;
  cursor: pointer;
  overflow: hidden;

  & svg {
    position: relative;
    left: 10%;
    top: -1246%;
  }
`;

export const FooterCol1 = styled.section`
  width: 18%;
  padding-top: 10px;

  > h5 {
    color: #babfc4;
    font-size: 16px;
    margin-bottom: 20px;
    font-weight: 400;
  }

  > li {
    color: #babfc4;
    font-size: 13.6px;
    list-style-type: none;
    margin-bottom: 10px;
    font-weight: 200;
  }
`;

export const FooterCol2 = styled.section`
  width: 13%;
  padding-top: 10px;

  > h5 {
    color: #babfc4;
    font-size: 16px;
    margin-bottom: 20px;
    font-weight: 400;
  }

  > li {
    color: #babfc4;
    font-size: 13.6px;
    list-style-type: none;
    margin-bottom: 10px;
    font-weight: 200;
  }
`;

export const FooterCol3 = styled.section`
  width: 15%;
  padding-top: 10px;

  > h5 {
    color: #babfc4;
    font-size: 16px;
    margin-bottom: 20px;
    font-weight: 400;
  }

  > li {
    color: #babfc4;
    font-size: 13.6px;
    list-style-type: none;
    margin-bottom: 10px;
    font-weight: 200;
  }
`;

export const FooterCol4 = styled.section`
  width: 23%;
  padding-top: 10px;

  > h5 {
    color: #babfc4;
    font-size: 16px;
    margin-bottom: 20px;
    font-weight: 400;
  }

  > li {
    color: #babfc4;
    font-size: 13.6px;
    list-style-type: none;
    margin-bottom: 10px;
    font-weight: 200;
  }
`;

export const SnsBox = styled.section`
  width: 24%;
  padding-top: 10px;
  padding-bottom: 30px;
  color: #babfc4;
  font-size: 11px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  > div > div {
    color: #9fa6ad;
    margin-bottom: 5px;
    font-size: 8px;
  }
`;

export const SSns = styled.div`
  margin-top: 4px;

  > a {
    color: #9fa6ad;
    text-decoration-line: none;
    padding-right: 12px;
    font-size: 10px;
  }
`;
