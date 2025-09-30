// import styled from 'styled-components';

// export const SNewCardContainer = styled.div`
//     max-width: 800px;
//     margin: 0 auto;
//     background: white;
//     padding: 30px;
//     border-radius: 12px;
//     box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);

//     h2 {
//         margin-bottom: 20px;
//         color: #000;
//         font-size: 24px;
//     }
// `;

// export const SNewCardForm = styled.form`
//     display: flex;
//     flex-direction: column;
//     gap: 25px;
// `;

// export const SFormGroup = styled.div`
//     display: flex;
//     flex-direction: column;
//     gap: 8px;
    
//     ${props => props.$hasError && `
//         border-left: 3px solid #dc3545;
//         padding-left: 10px;
//     `}
// `;

// export const SLabel = styled.label`
//     display: block;
//     margin-bottom: 8px;
//     font-weight: 600;
//     color: #000;
    
    
// `;

// export const SNewCardInput = styled.input`
//     width: 370px;
//     height: 49px;
//     padding: 14px;
//     box-sizing: border-box;
//     border: 0.7px solid ${props => props.$hasError ? '#dc3545' : 'rgba(148, 166, 190, 0.4)'};
//     border-radius: 8px;
//     background-color: ${props => props.$hasError ? '#fff5f5' : '#fff'};
//     transition: all 0.3s ease;

//     &:focus {
//         outline: none;
//         border-color: ${props => props.$hasError ? '#dc3545' : '#565EEF'};
//         box-shadow: ${props => props.$hasError ? '0 0 0 2px rgba(220, 53, 69, 0.25)' : '0 0 0 2px rgba(86, 94, 239, 0.25)'};
//     }

//     &:disabled {
//         background-color: #f8f9fa;
//         cursor: not-allowed;
//     }

//     &::placeholder {
//         color: ${props => props.$hasError ? '#dc3545' : '#6c757d'};
//         opacity: 0.7;
//     }
// `;

// export const SNewCardTextarea = styled.textarea`
//     width: 370px;
//     height: 200px;
//     padding: 14px;
//     box-sizing: border-box;
//     border: 0.7px solid ${props => props.$hasError ? '#dc3545' : 'rgba(148, 166, 190, 0.4)'};
//     border-radius: 8px;
//     background-color: ${props => props.$hasError ? '#fff5f5' : '#fff'};
//     resize: vertical;
//     transition: all 0.3s ease;

//     &:focus {
//         outline: none;
//         border-color: ${props => props.$hasError ? '#dc3545' : '#565EEF'};
//         box-shadow: ${props => props.$hasError ? '0 0 0 2px rgba(220, 53, 69, 0.25)' : '0 0 0 2px rgba(86, 94, 239, 0.25)'};
//     }

//     &:disabled {
//         background-color: #f8f9fa;
//         cursor: not-allowed;
//     }

//     &::placeholder {
//         color: ${props => props.$hasError ? '#dc3545' : '#6c757d'};
//         opacity: 0.7;
//     }
// `;

// export const SFieldError = styled.span`
//     color: #dc3545;
//     font-size: 14px;
//     margin-top: 5px;
//     display: flex;
//     align-items: center;
//     gap: 5px;

   
// `;

// export const STopicButtons = styled.div`
//     display: flex;
//     gap: 10px;
//     margin-top: 8px;
// `;

// export const STopicButton = styled.button`
//     padding: 8px 16px;
//     border: 1px solid #ccc;
//     background-color: ${props => props.$active ? '#565EEF' : '#fff'};
//     color: ${props => props.$active ? '#fff' : '#000'};
//     border-radius: 4px;
//     cursor: ${props => props.disabled ? 'not-allowed' : 'pointer'};
//     opacity: ${props => props.disabled ? 0.6 : 1};
//     transition: all 0.3s ease;

//     &:hover:not(:disabled) {
//         background-color: ${props => props.$active ? '#454ce0' : '#f8f9fa'};
//     }
// `;

// export const SButtonsGroup = styled.div`
//     display: flex;
//     gap: 10px;
//     margin-top: 20px;
// `;

// export const SNewCardButton = styled.button`
//     padding: 12px 24px;
//     background-color: ${props => props.$cancel ? '#6c757d' : '#565EEF'};
//     color: white;
//     border: none;
//     border-radius: 6px;
//     font-size: 16px;
//     cursor: pointer;
//     transition: background-color 0.3s;
//     flex: 1;

//     &:hover:not(:disabled) {
//         background-color: ${props => props.$cancel ? '#5a6268' : '#454ce0'};
//     }

//     &:disabled {
//         background-color: #ccc;
//         cursor: not-allowed;
//     }
// `;

// export const SError = styled.div`
//     color: #dc3545;
//     background-color: #f8d7da;
//     border: 1px solid #f5c6cb;
//     padding: 15px;
//     border-radius: 5px;
//     margin-bottom: 20px;
//     text-align: left;
//     font-size: 14px;

//     strong {
//         display: block;
//         margin-bottom: 5px;
//     }
// `;