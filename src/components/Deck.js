import React from "react";
import styled from "styled-components";

const decks = [
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

const chosenDeck = decks.filter((deck) => deck.name === "React")[0];

function Deck() {
    return (
        <StyledDeck>
            {chosenDeck.questions.map((question, index) => (
                <Flashcard>
                    <FlashcardText>Pergunta {index + 1}</FlashcardText>
                    <ion-icon name="play-outline"></ion-icon>
                </Flashcard>
            ))}
        </StyledDeck>
    );
}

export default Deck;

const StyledDeck = styled.ul`
    margin-top: 50px;
    margin-bottom: 110px;
`;

const Flashcard = styled.li`
    background-color: #fff;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 25px;
    padding: 0 15px;
    height: 65px;
    width: 300px;
    box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
    border-radius: 5px;

    ion-icon {
        font-size: 30px;
    }
`;

const FlashcardText = styled.h2`
    font-weight: 700;
    color: #333333;
`;
