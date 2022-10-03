import React, { useState } from "react";
import { StyledDeck } from "./style";
import Flashcard from "../Flashcard/Flashcard";

function Deck({
    answerdQuestions,
    setAnswerdQuestions,
    chosenDeck,
    flashcardsStatuses,
    setFlashcardsStatuses,
}) {
    console.log(flashcardsStatuses);

    const oneFlashCardIsFlipped = flashcardsStatuses.some(
        ({ status }) => status === "question" || status === "answer"
    );

    console.log(oneFlashCardIsFlipped);

    const updateFlashcardsStatuses = (
        status,
        index = flashcardsStatuses.map(({ status }) => status).indexOf("answer")
    ) => {
        flashcardsStatuses[index].status = status;

        if (status !== "question" && status !== "answer") {
            const counter = flashcardsStatuses.filter(({ status }) => {
                const isAnswerd =
                    status !== "initial" &&
                    status !== "question" &&
                    status !== "answer";
                return isAnswerd;
            }).length;

            flashcardsStatuses[index].sequence = counter;
        }

        setFlashcardsStatuses([...flashcardsStatuses]);
    };

    return (
        <StyledDeck>
            {chosenDeck.questions.map((question, index) => (
                <Flashcard
                    key={index}
                    question={question}
                    index={index}
                    answerdQuestions={answerdQuestions}
                    setAnswerdQuestions={setAnswerdQuestions}
                    oneFlashCardIsFlipped={oneFlashCardIsFlipped}
                    thisFlashcardStatus={flashcardsStatuses[index].status}
                    updateFlashcardsStatuses={updateFlashcardsStatuses}
                />
            ))}
        </StyledDeck>
    );
}

export default Deck;
