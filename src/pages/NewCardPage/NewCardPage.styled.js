import styled from 'styled-components';

export const SNewCardPage = styled.div`
    padding: 20px;
    min-height: 100vh;
    background: #f5f5f5;
`;

export const SNewCardContainer = styled.div`
    max-width: 800px;
    margin: 0 auto;
    background: white;
    padding: 30px;
    border-radius: 12px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);

    h2 {
        margin-bottom: 20px;
        color: #000;
        font-size: 24px;
    }
`;

export const SNewCardForm = styled.form`
    display: flex;
    flex-direction: column;
    gap: 20px;
`;

export const SNewCardLabel = styled.label`
    display: block;
    margin-bottom: 8px;
    font-weight: 600;
    color: #000;
`;

export const SNewCardInput = styled.input`
    width: 100%;
    padding: 12px;
    border: 1px solid #ccc;
    border-radius: 6px;
    font-size: 16px;

    &:focus {
        outline: none;
        border-color: #565EEF;
    }
`;

export const SNewCardTextarea = styled.textarea`
    width: 100%;
    padding: 12px;
    border: 1px solid #ccc;
    border-radius: 6px;
    font-size: 16px;
    resize: vertical;
    min-height: 100px;

    &:focus {
        outline: none;
        border-color: #565EEF;
    }
`;

export const SNewCardSelect = styled.select`
    width: 100%;
    padding: 12px;
    border: 1px solid #ccc;
    border-radius: 6px;
    font-size: 16px;
    background: white;

    &:focus {
        outline: none;
        border-color: #565EEF;
    }
`;

export const SNewCardButton = styled.button`
    padding: 12px 24px;
    background-color: #565EEF;
    color: white;
    border: none;
    border-radius: 6px;
    font-size: 16px;
    cursor: pointer;
    transition: background-color 0.3s;

    &:hover:not(:disabled) {
        background-color: #454ce0;
    }

    &:disabled {
        background-color: #ccc;
        cursor: not-allowed;
    }
`;

export const SError = styled.div`
    color: #ff0000;
    background-color: #ffe6e6;
    padding: 15px;
    border-radius: 5px;
    margin-bottom: 20px;
    text-align: center;
    font-size: 14px;
    border: 1px solid #ff0000;
`;