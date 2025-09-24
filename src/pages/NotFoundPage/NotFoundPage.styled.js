import styled from 'styled-components';

export const SNotFoundContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 60vh;
    text-align: center;
    padding: 20px;
`;

export const SNotFoundTitle = styled.h2`
    font-size: 48px;
    color: #565EEF;
    margin-bottom: 20px;
`;

export const SNotFoundText = styled.p`
    font-size: 18px;
    color: #94A6BE;
    margin-bottom: 30px;
`;

export const SNotFoundLink = styled.a`
    color: #565EEF;
    text-decoration: none;
    font-size: 16px;
    
    &:hover {
        text-decoration: underline;
    }
`;