import React from "react";
import styled from "styled-components";
import Flashcard from "./Flashcard";

function Deck({
    chosenDeck,
    flashcardsStatuses,
    setFlashcardsStatuses,
    COLORS,
}) {
    return (
        <StyledDeck>
            {chosenDeck.questions.map((question, index) => (
                <Flashcard
                    key={index}
                    question={question}
                    index={index}
                    flashcardsStatuses={flashcardsStatuses}
                    setFlashcardsStatuses={setFlashcardsStatuses}
                    COLORS={COLORS}
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
