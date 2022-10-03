import styled, { css } from "styled-components";
import { COLORS } from "../../styles/colors";

export const StyledFlashcard = styled.li`
    background-color: #fff;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 25px;
    padding: 15px 15px;
    min-height: 65px;
    width: 300px;
    box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
    border-radius: 5px;

    ion-icon {
        font-size: 30px;
        cursor: ${({ oneFlashCardIsFlipped, status }) =>
            oneFlashCardIsFlipped || status !== "initial" ? "auto" : "pointer"};
        display: ${({ status }) =>
            status === "question" || status === "answer" ? "none" : "auto"};
    }

    ${({ status }) => {
        if (status === "question" || status === "answer") {
            return css`
                background: #ffffd5;
                min-height: 130px;
                flex-direction: column;
                align-items: flex-start;
            `;
        }
    }}

    color: ${({ status }) => COLORS[status] || "#333"};
    text-decoration: ${({ status }) =>
        status === "incorrect" ||
        status === "correctWithEfford" ||
        status === "correct"
            ? "line-through"
            : "auto"};
`;

export const FlashcardText = styled.h2`
    font-weight: 700;

    ${({ status }) => {
        if (status === "question" || status === "answer") {
            return css`
                font-weight: 400;
                font-size: 18px;
                line-height: 22px;
            `;
        }
    }};
`;

export const FlashcardArrow = styled.img`
    display: ${(props) => (props.status !== "question" ? "none" : "initial")};

    width: 30px;
    margin-left: calc(100% - 30px);
    cursor: pointer;
`;

export const FlashcardOptions = styled.ul`
    display: flex;
    justify-content: space-between;
    width: 100%;
    margin-top: 15px;
`;

export const OptionButton = styled.button`
    height: 37px;
    width: 85px;
    font-size: 12px;
    line-height: 14px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #fff;
    background-color: ${(props) => props.color};
    border-radius: 5px;
    border: none;
    cursor: pointer;
`;
