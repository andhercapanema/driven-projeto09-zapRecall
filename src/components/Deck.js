import React, { useState } from "react";
import styled from "styled-components";
import Flashcard from "./Flashcard/Flashcard";

const DECKS = [
    {
        name: "React",
        questions: [
            {
                question: "O que é JSX?",
                answer: "Uma extensão de linguagem do JavaScript",
            },
            {
                question: "O React é __",
                answer: "uma biblioteca JavaScript para construção de interfaces",
            },
            {
                question: "Componentes devem iniciar com __",
                answer: "letra maiúscula",
            },
            {
                question: "Podemos colocar __ dentro do JSX",
                answer: "expressões",
            },
            {
                question: "O ReactDOM nos ajuda __",
                answer: "interagindo com a DOM para colocar componentes React na mesma",
            },
            {
                question: "Usamos o npm para __",
                answer: "gerenciar os pacotes necessários e suas dependências",
            },
            {
                question: "Usamos props para __",
                answer: "passar diferentes informações para componentes",
            },
            {
                question: "Usamos estado (state) para __",
                answer: "dizer para o React quais informações quando atualizadas devem renderizar a tela novamente",
            },
        ],
    },
];

const chosenDeck = DECKS.filter((deck) => deck.name === "React")[0];

function Deck({ answerdQuestions, setAnswerdQuestions, COLORS }) {
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
