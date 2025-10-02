import styled from 'styled-components';

export const SPopBrowse = styled.div`
  display: ${props => props.$isOpen ? 'block' : 'none'};
  width: 100%;
  height: 100%;
  min-width: 375px;
  min-height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 7;

  @media screen and (max-width: 660px) {
    top: 70px;
  }
`;

export const SPopBrowseContainer = styled.div`
  width: 100%;
  height: 100%;
  min-height: 100vh;
  padding: 0 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.4);
`;

export const SPopBrowseBlock = styled.div`
  display: block;
  margin: 0 auto;
  background-color: #FFFFFF;
  max-width: 630px;
  width: 100%;
  padding: 40px 30px 38px;
  border-radius: 10px;
  border: 0.7px solid #D4DBE5;
  position: relative;
`;

export const SPopBrowseContent = styled.div`
  display: block;
  text-align: left;
  
  .categories__theme {
    opacity: 1;
  }
  
  .theme-down {
    display: none;
    margin-bottom: 20px;
  }
  
  .theme-top {
    display: block;
  }
`;

export const SPopBrowseTopBlock = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 18px;
`;

export const SPopBrowseTtl = styled.h3`
  color: #000;
  font-size: 20px;
  font-weight: 600;
  line-height: 24px;
`;

export const SPopBrowseWrap = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
`;

export const SFormBrowse = styled.form`
  max-width: 370px;
  width: 100%;
  display: block;
  margin-bottom: 20px;
`;

export const SFormBrowseBlock = styled.div`
  display: flex;
  flex-direction: column;
`;

export const SFormBrowseArea = styled.textarea`
  max-width: 370px;
  width: 100%;
  outline: none;
  padding: 14px;
  background: #EAEEF6;
  border: none;
  border-radius: 8px;
  font-size: 14px;
  line-height: 1;
  letter-spacing: -0.14px;
  margin-top: 14px;
  height: 200px;
  
  &::placeholder {
    font-weight: 400;
    font-size: 14px;
    line-height: 1px;
    color: #94A6BE;
    letter-spacing: -0.14px;
  }
`;

export const SStatus = styled.div`
  margin-bottom: 11px;
`;

export const SStatusP = styled.p`
  margin-bottom: 14px;
`;

export const SStatusThemes = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: flex-start;
`;

export const SStatusTheme = styled.div`
  border-radius: 24px;
  border: 0.7px solid rgba(148, 166, 190, 0.4);
  color: #94A6BE;
  padding: 11px 14px 10px;
  margin-right: 7px;
  margin-bottom: 7px;
  
  p {
    font-size: 14px;
    line-height: 1;
    letter-spacing: -0.14px;
  }
`;

export const SCategories = styled.div`
  margin-bottom: 20px;
`;

export const SCategoriesP = styled.p`
  margin-bottom: 14px;
`;

export const SCategoriesTheme = styled.div`
  border-radius: 24px;
  opacity: 0.4;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 8px 20px 8px 20px;
  
  p {
    font-size: 14px;
    font-weight: 600;
    line-height: 14px;
    white-space: nowrap;
  }

  select {
    appearance: none;
    -webkit-appearance: none;
    -moz-appearance: none;
    background: transparent;
    border: none;
    outline: none;
    cursor: pointer;
    text-align: center;
    font-size: inherit;
    font-weight: inherit;
    color: inherit;
  }

  select::-ms-expand {
    display: none;
  }
`;

export const SPopBrowseBtnBrowse = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: space-between;
  
  button {
    height: 30px;
    margin-bottom: 10px;
    padding: 0 14px;
  }
  
  .btn-group button {
    margin-right: 8px;
  }
`;

export const SPopBrowseBtnEdit = styled.div`
  display: none;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: space-between;
  
  button {
    height: 30px;
    margin-bottom: 10px;
    padding: 0 14px;
  }
  
  .btn-group button {
    margin-right: 8px;
  }
`;

export const STitleInput = styled.input`
  border: none;
  background: transparent;
  color: inherit;
  width: 100%;
  outline: none;
  border-bottom: none;
  padding: 2px 0;
  font-family: 'Roboto', sans-serif;
  font-size: 20px;
  font-weight: bold;
`;

export const STopicSelect = styled.select`
  border: none;
  background: transparent;
  color: inherit;
  outline: none;
  cursor: pointer;
  font-size: 14px;
  font-weight: 250;
`;

export const SErrorDiv = styled.div`
  color: red;
  margin-bottom: 15px;
  text-align: center;
  padding: 10px;
  background-color: #ffe6e6;
  border-radius: 4px;
`;