import React, { useState } from "react";
import styled, { css } from "styled-components";
import arrow from "../assets/img/setinha.svg";

function Flashcard({
    index,
    question: { question, answer },
    COLORS,
    flashcardsStatuses,
    setFlashcardsStatuses,
}) {
    const [flashcardText, setFlashcardText] = useState("");

    let thisFlashcardStatus = flashcardsStatuses[index];
    const oneFlashCardIsFlipped =
        flashcardsStatuses.filter(
            (status) => status === "answer" || status === "question"
        ).length !== 0;

    const flashCardIonIcon = {
        initial: "play-outline",
        incorrect: "close-circle",
        correctWithEfford: "help-circle",
        correct: "checkmark-circle",
    };

    function showQuestion() {
        setFlashcardText(question);
        flashcardsStatuses[index] = "question";
        setFlashcardsStatuses([...flashcardsStatuses]);
    }

    function showAnswer() {
        setFlashcardText(answer);
        flashcardsStatuses[index] = "answer";
        setFlashcardsStatuses([...flashcardsStatuses]);
    }

    return (
        <StyledFlashcard
            status={thisFlashcardStatus}
            oneFlashCardIsFlipped={oneFlashCardIsFlipped}
            COLORS={COLORS}
        >
            <FlashcardText>
                {thisFlashcardStatus === "question" ||
                thisFlashcardStatus === "answer"
                    ? flashcardText
                    : `Pergunta ${index + 1}`}
            </FlashcardText>
            <ion-icon
                name={flashCardIonIcon[thisFlashcardStatus]}
                onClick={
                    oneFlashCardIsFlipped || thisFlashcardStatus !== "initial"
                        ? () => ""
                        : showQuestion
                }
            ></ion-icon>
            <FlashcardArrow
                src={arrow}
                alt="Clique para ver resposta"
                status={thisFlashcardStatus}
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
        cursor: ${({ oneFlashCardIsFlipped, status }) =>
            oneFlashCardIsFlipped || status !== "initial" ? "auto" : "pointer"};
        display: ${({ status }) =>
            status === "question" || status === "answer" ? "none" : "auto"};
    }

    ${({ status }) => {
        if (status === "question" || status === "answer") {
            return css`
                background: #ffffd5;
                height: 130px;
                flex-direction: column;
                align-items: flex-start;
            `;
        }
    }}

    color: ${({ COLORS, status }) => COLORS[status] || "#333"};
    text-decoration: ${({ status }) =>
        status === "incorrect" ||
        status === "correctWithEfford" ||
        status === "correct"
            ? "line-through"
            : "auto"};
`;

const FlashcardText = styled.h2`
    font-weight: 700;
`;

const FlashcardArrow = styled.img`
    display: ${(props) => (props.status !== "question" ? "none" : "initial")};

    width: 30px;
    margin-left: calc(100% - 30px);
    cursor: pointer;
`;
