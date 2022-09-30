import styled from "styled-components";

export const ResultMain = styled.main`
    background-color: rgba(0.5, 0.5, 0.5, 0.6);
    height: 100vh;
    width: 100vw;
    position: fixed;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const ResultCard = styled.div`
    background-color: #fff;
    width: 300px;
    padding: 20px 50px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border-radius: 15px;
`;

export const ResultImage = styled.img`
    height: 40px;
    margin-bottom: 20px;
`;

export const ResultText = styled.h1`
    font-size: 20px;
    font-weight: 600;
    text-align: center;
`;
