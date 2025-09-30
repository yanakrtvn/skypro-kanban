// import styled from "styled-components";

// export const SCardPageContainer = styled.div`
//   max-width: 730px;
//   width: 100%;
//   margin: 0 auto;
//   padding: 0 16px;
// `;

// export const SCardPageContent = styled.div`
//   width: 630px;
//   display: flex;
//   flex-direction: column;
//   justify-content: flex-start;
//   align-items: flex-start;
//   gap: 18px;
//   padding: 40px 30px 48px 30px;
//   box-sizing: border-box;
//   border: 0.7px solid rgba(212, 219, 229, 1);
//   border-radius: 10px;
//   background: rgba(255, 255, 255, 1);
// `;

// export const SCardPageTitle = styled.h1`
//   color: #000;
//   font-size: 20px;
//   font-weight: 600;
//   line-height: 24px;
//   margin: 0;
//   flex: 1;
// `;

// export const SCardPageButton = styled.button`
//   height: 30px;
//   padding: 0 14px;
//   border-radius: 4px;
//   font-size: 14px;
//   font-weight: 500;
//   line-height: 21px;
//   letter-spacing: -0.14px;
//   cursor: pointer;
//   transition: all 0.3s ease;
//   border: none;
//   text-decoration: none;
//   display: flex;
//   align-items: center;
//   justify-content: center;

//   background-color: ${props => {
//     if (props.$primary) return '#565EEF';
//     if (props.$danger) return '#ff4444';
//     if (props.$secondary) return 'transparent';
//     return '#565EEF';
//   }};

//   color: ${props => props.$secondary ? '#565EEF' : '#FFFFFF'};
//   border: ${props => props.$secondary ? '0.7px solid #565EEF' : 'none'};

//   &:hover {
//     background-color: ${props => {
//       if (props.$primary) return '#3a42e0';
//       if (props.$danger) return '#cc3333';
//       if (props.$secondary) return 'rgba(86, 94, 239, 0.1)';
//       return '#3a42e0';
//     }};
//   }
// `;

// export const SButtonsGroup = styled.div`
//   display: flex;
//   gap: 10px;
//   margin-top: 20px;
//   flex-wrap: wrap;
// `;

// export const SCardPageForm = styled.form`
//   display: flex;
//   flex-direction: column;
//   gap: 20px;
//   width: 100%;

//   div {
//     display: flex;
//     flex-direction: column;
//     gap: 8px;
//   }

//   label {
//     color: #000;
//     font-size: 14px;
//     font-weight: 600;
//     line-height: 21px;
//     letter-spacing: -0.14px;
//   }
// `;

// export const SCardPageInput = styled.input`
//   padding: 10px 14px;
//   border-radius: 8px;
//   border: 0.7px solid rgba(148, 166, 190, 0.4);
//   background: #FFFFFF;
//   font-size: 14px;
//   line-height: 21px;
//   letter-spacing: -0.14px;
//   color: #000;
//   transition: border-color 0.3s ease;

//   &:focus {
//     outline: none;
//     border-color: #565EEF;
//   }

//   &[type="date"] {
//     cursor: pointer;
//   }
// `;

// export const SCardPageSelect = styled.select`
//   padding: 10px 14px;
//   border-radius: 8px;
//   border: 0.7px solid rgba(148, 166, 190, 0.4);
//   background: #FFFFFF;
//   font-size: 14px;
//   line-height: 21px;
//   letter-spacing: -0.14px;
//   color: #000;
//   cursor: pointer;
//   transition: border-color 0.3s ease;

//   &:focus {
//     outline: none;
//     border-color: #565EEF;
//   }
// `;

// export const SCardPageTextarea = styled.textarea`
//   padding: 10px 14px;
//   border-radius: 8px;
//   border: 0.7px solid rgba(148, 166, 190, 0.4);
//   background: #FFFFFF;
//   font-size: 14px;
//   line-height: 21px;
//   letter-spacing: -0.14px;
//   color: #000;
//   resize: vertical;
//   min-height: 100px;
//   transition: border-color 0.3s ease;
//   font-family: inherit;

//   &:focus {
//     outline: none;
//     border-color: #565EEF;
//   }
// `;

// export const SError = styled.div`
//   color: #ff0000;
//   background-color: #ffe6e6;
//   padding: 20px;
//   border-radius: 5px;
//   margin: 20px 0;
//   text-align: center;
//   font-size: 14px;
//   border: 1px solid #ff0000;
// `;

// export const SLoadingText = styled.div`
//   text-align: center;
//   font-size: 16px;
//   color: #666;
//   padding: 40px 20px;
// `;