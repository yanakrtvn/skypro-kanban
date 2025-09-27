import styled from "styled-components";

export const SColumnContainer = styled.div`
  width: 20%;
  margin: 0 auto;
  display: block;

  @media screen and (max-width: 1200px) {
    width: 100%;
    margin: 0 auto;
    display: block;
  }
`;

export const SColumnTitle = styled.div`
  padding: 0 10px;
  margin: 15px 0;

  p {
    color: #94A6BE;
    font-size: 14px;
    font-weight: 600;
    line-height: 1;
    text-transform: uppercase;
  }
`;
export const SCardCount = styled.span`
  display: inline-block;
  padding: 2px 8px;
  background-color: #94A6BE;
  color: #FFFFFF;
  border-radius: 10px;
  font-size: 12px;
  font-weight: 600;
  line-height: 1;
`;

export const SCardsContainer = styled.div`
  width: 100%;
  display: block;
  position: relative;

  @media screen and (max-width: 1200px) {
    width: 100%;
    display: flex;
    overflow-y: auto;
  }
`;