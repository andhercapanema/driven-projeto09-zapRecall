import React, { useState } from "react";
import GlobalStyle from "./styles/GlobalStyle";
import MainPage from "./pages/MainPage/MainPage";
import LoginPage from "./pages/LoginPage/LoginPage";

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
    {
        name: "Pantanal",
        questions: [
            {
                question: "Juma?",
                answer: "Uma extensão de linguagem do JavaScript",
            },
            {
                question: "Jove",
                answer: "uma biblioteca JavaScript para construção de interfaces",
            },
            {
                question: "Zé Leôncio",
                answer: "letra maiúscula",
            },
            {
                question: "Filó",
                answer: "expressões",
            },
            {
                question: "Tenório",
                answer: "interagindo com a DOM para colocar componentes React na mesma",
            },
            {
                question: "Guta",
                answer: "gerenciar os pacotes necessários e suas dependências",
            },
            {
                question: "Maria Bruaca",
                answer: "passar diferentes informações para componentes",
            },
            {
                question: "Vei do Rio",
                answer: "dizer para o React quais informações quando atualizadas devem renderizar a tela novamente",
            },
        ],
    },
];

const App = () => {
    const [recallHasStarted, setRecallHasStarted] = useState(false);
    const [chosenDeck, setChosenDeck] = useState("default");
    const [correctAnswersGoal, setCorrectAnswersGoal] = useState(0);

    return (
        <>
            <GlobalStyle />
            {recallHasStarted ? (
                <MainPage
                    chosenDeck={chosenDeck}
                    correctAnswersGoal={correctAnswersGoal}
                />
            ) : (
                <LoginPage
                    setRecallHasStarted={setRecallHasStarted}
                    DECKS={DECKS}
                    chosenDeck={chosenDeck}
                    setChosenDeck={setChosenDeck}
                    correctAnswersGoal={correctAnswersGoal}
                    setCorrectAnswersGoal={setCorrectAnswersGoal}
                />
            )}
        </>
    );
};

export default App;
