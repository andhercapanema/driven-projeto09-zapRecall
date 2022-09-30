import styled, { css } from "styled-components";

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
        cursor: pointer;
    }
`;

export const LoginSelectDeck = styled.select`
    width: 100%;
    height: 100%;
    background: transparent;
    border: none;
    padding: 0 9px;
    -webkit-appearance: none;
    color: ${({ chosenDeck }) =>
        chosenDeck === "default" ? "#adadad" : "#d70900"};
    cursor: pointer;
`;

export const LoginGoalInput = styled.input`
    width: 246px;
    height: 43px;
    background: #fff;
    border-radius: 5px;
    border: none;
    padding: 0 9px;
    margin-bottom: 18px;
    color: ${({ correctAnswersGoal }) =>
        correctAnswersGoal >= 1 && correctAnswersGoal <= 8
            ? "#d70900"
            : "#c0c0c0"};

    &::placeholder {
        color: #adadad;
        opacity: 1;
    }
`;

export const LoginButton = styled.button`
    width: 246px;
    height: 54px;
    border-radius: 5px;

    ${({ readyToStart }) => {
        if (readyToStart) {
            return css`
                cursor: pointer;
                background: #fff;
                border: 1px solid #d70900;
                box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
                color: #d70900;
            `;
        } else {
            return css`
                cursor: auto;
                background: #e8e8e8;
                border: none;
                color: #c0c0c0;
            `;
        }
    }}

    font-size: 18px;
    font-family: "Recursive", sans-serif;
`;
