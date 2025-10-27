import styled from "styled-components";

export const SMain = styled.main`
  width: 100%;
  background-color: #eaeef6;
`;

export const SMainBlock = styled.div`
  width: 100%;
  margin: 0 auto;
  padding: 25px 0 49px;

  @media screen and (max-width: 1200px) {
    width: 100%;
    margin: 0 auto;
    padding: 40px 0 64px;
  }
`;

export const SMainContent = styled.div`
  width: 100%;
  display: flex;

  @media screen and (max-width: 1200px) {
    display: block;
  }
;` 

export const SLoadingContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 400px;
  width: 100%;
`;

export const SLoadingText = styled.p`
  font-size: 18px;
  color: #94A6BE;
  font-weight: 500;
`;
