import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const SRegisterContainer = styled.div`
    width: 400px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 20px;
    padding: 40px;
    box-sizing: border-box;
    border: 0.7px solid rgb(212, 219, 229);
    border-radius: 10px;
    box-shadow: 0 4px 67px -12px rgba(0, 0, 0, 0.13);
    background-color: #ffffff;
    margin: 50px auto;

    h2 {
        text-align: center;
        color: #000;
        font-size: 24px;
        margin-bottom: 20px;
    }

    p {
        color: rgba(148, 166, 190, 0.4);
        font-size: 14px;
        text-align: center;
        margin-top: 20px;
    }
`;

export const SRegisterForm = styled.form`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 15px;
`;

export const SRegisterInput = styled.input`
    width: 100%;
    height: 40px;
    padding: 10px;
    border: 0.7px solid rgba(148, 166, 190, 0.4);
    border-radius: 8px;
    font-size: 14px;
    
    &:focus {
        outline: none;
        border-color: #565EEF;
    }
`;

export const SRegisterButton = styled.button`
    width: 100%;
    height: 40px;
    border-radius: 4px;
    background: #565EEF;
    color: #ffffff;
    border: none;
    font-size: 16px;
    font-weight: 500;
    cursor: pointer;
    
    &:hover {
        background: #454bc9;
    }
`;

export const SRegisterLink = styled(Link)`
    color: rgba(148, 166, 190, 0.4);
    text-decoration: underline;
    
    &:hover {
        color: #454bc9;
    }
`;

export const SError = styled.div`
    color: #ff0000;
    background-color: #ffe6e6;
    padding: 10px;
    border-radius: 5px;
    margin-bottom: 15px;
    text-align: center;
    font-size: 14px;
    border: 1px solid #ff0000;
`;