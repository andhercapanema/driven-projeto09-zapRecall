import styled from "styled-components";

export const StyledLoginPage = styled.main`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background-color: #fb6b6b;
`;

export const LoginImg = styled.img`
    height: 161px;
    margin-bottom: 18px;
`;

export const LoginText = styled.h1`
    font-family: "Righteous";
    font-size: 36px;
    line-height: 45px;
    letter-spacing: -0.012em;
    color: #fff;
    margin-bottom: 36px;
`;

export const LoginButton = styled.button`
    width: 246px;
    height: 54px;
    background: #fff;
    border: 1px solid #d70900;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
    border-radius: 5px;
    cursor: pointer;

    font-size: 18px;
    color: #d70900;
    font-family: "Recursive", sans-serif;
`;

export const LoginSelectWrapper = styled.div`
    width: 246px;
    height: 43px;
    background: #fff;
    border-radius: 5px;

    margin-bottom: 18px;

    position: relative;

    ion-icon {
        position: absolute;
        right: 13.5px;
        top: 13.5px;
        color: #adadad;
    }
`;

export const LoginSelectDeck = styled.select`
    width: 246px;
    height: 43px;
    background: transparent;
    border-radius: 5px;
    border: none;
    padding: 0 9px;
    -webkit-appearance: none;
    color: ${({ chosenDeck }) =>
        chosenDeck === "default" ? "#adadad" : "auto"};
    cursor: pointer;
`;
