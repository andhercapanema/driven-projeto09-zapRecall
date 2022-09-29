import React, { useState } from "react";
import Footer from "../components/Footer";
import Deck from "../components/Deck";
import Header from "../components/Header";
import styled from "styled-components";

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

const COLORS = {
    incorrect: "#ff3030",
    correctWithEfford: "#ff922e",
    correct: "#2fbe34",
};

const MainPage = () => {
    const [flashcardsStatuses, setFlashcardsStatuses] = useState(
        chosenDeck.questions.map(() => "initial")
    );

    return (
        <StyledPage>
            <Header />
            <Deck
                chosenDeck={chosenDeck}
                flashcardsStatuses={flashcardsStatuses}
                setFlashcardsStatuses={setFlashcardsStatuses}
                COLORS={COLORS}
            />
            <Footer
                flashcardsStatuses={flashcardsStatuses}
                setFlashcardsStatuses={setFlashcardsStatuses}
                COLORS={COLORS}
            />
        </StyledPage>
    );
};

export default MainPage;

const StyledPage = styled.main`
    display: flex;
    flex-direction: column;
    align-items: center;
    background: #fb6b6b;
`;
