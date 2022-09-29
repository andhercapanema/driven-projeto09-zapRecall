import React, { useState } from "react";
import styled, { css } from "styled-components";
import arrow from "../assets/img/setinha.svg";

function Flashcard({
    index,
    question: { question, answer },
    flashcardIsFlipped,
    setFlashcardIsFlipped,
}) {
    const [flashcardText, setFlashcardText] = useState(`Pergunta ${index + 1}`);
    const [flashcardStatus, setFlashcardStatus] = useState("initial");

    function showQuestion() {
        setFlashcardText(question);
        setFlashcardStatus("question");
        setFlashcardIsFlipped(true);
    }

    function showAnswer() {
        setFlashcardText(answer);
        setFlashcardStatus("answer");
    }

    return (
        <StyledFlashcard status={flashcardStatus}>
            <FlashcardText>{flashcardText}</FlashcardText>
            <ion-icon
                name="play-outline"
                onClick={flashcardIsFlipped ? () => "" : showQuestion}
            ></ion-icon>
            <FlashcardArrow
                src={arrow}
                alt="Clique para ver resposta"
                status={flashcardStatus}
                onClick={showAnswer}
            />
        </StyledFlashcard>
    );
}

export default Flashcard;

const StyledFlashcard = styled.li`
    background-color: #fff;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 25px;
    padding: 15px 15px;
    height: 65px;
    width: 300px;
    box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
    border-radius: 5px;

    ion-icon {
        font-size: 30px;
        cursor: pointer;

        ${(props) => {
            if (props.status === "question" || props.status === "answer") {
                return css`
                    display: none;
                `;
            }
        }}
    }

    ${(props) => {
        if (props.status === "question" || props.status === "answer") {
            return css`
                background: #ffffd5;
                height: 130px;
                flex-direction: column;
                align-items: flex-start;
            `;
        }
    }}
`;

const FlashcardText = styled.h2`
    font-weight: 700;
    color: #333333;
`;

const FlashcardArrow = styled.img`
    display: ${(props) => (props.status !== "question" ? "none" : "initial")};

    width: 30px;
    margin-left: calc(100% - 30px);
    cursor: pointer;
`;
