import React, { useState } from "react";
import styled from "styled-components";
import Flashcard from "./Flashcard/Flashcard";

function Deck({ answerdQuestions, setAnswerdQuestions, COLORS, chosenDeck }) {
    const [flashcardsStatuses, setFlashcardsStatuses] = useState(
        chosenDeck.questions.map(() => "initial")
    );

    const oneFlashCardIsFlipped =
        flashcardsStatuses.filter(
            (status) => status === "answer" || status === "question"
        ).length !== 0;

    const updateFlashcardsStatuses = (
        status,
        index = flashcardsStatuses.indexOf("answer")
    ) => {
        flashcardsStatuses[index] = status;
        setFlashcardsStatuses([...flashcardsStatuses]);
    };

    return (
        <StyledDeck>
            {chosenDeck.questions.map((question, index) => (
                <Flashcard
                    key={index}
                    question={question}
                    index={index}
                    chosenDeck={chosenDeck}
                    answerdQuestions={answerdQuestions}
                    setAnswerdQuestions={setAnswerdQuestions}
                    COLORS={COLORS}
                    oneFlashCardIsFlipped={oneFlashCardIsFlipped}
                    thisFlashcardStatus={flashcardsStatuses[index]}
                    updateFlashcardsStatuses={updateFlashcardsStatuses}
                />
            ))}
        </StyledDeck>
    );
}

export default Deck;

const StyledDeck = styled.ul`
    margin-top: 50px;
    margin-bottom: 110px;
`;
