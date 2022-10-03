import React, { useState } from "react";
import Footer from "../../components/Footer/Footer";
import Deck from "../../components/Deck/Deck";
import Header from "../../components/Header/Header";
import * as S from "./style";
import Result from "../../components/Result/Result";

const MainPage = ({ zapRecallConfig }) => {
    const [answerdQuestions, setAnswerdQuestions] = useState([]);

    const [flashcardsStatuses, setFlashcardsStatuses] = useState(
        zapRecallConfig.chosenDeck.questions.map((item, index) => {
            return { status: "initial", sequence: 0 };
        })
    );

    const recallIsOver = answerdQuestions.length === 8;

    return (
        <S.StyledMainPage>
            <Header />
            <Deck
                answerdQuestions={answerdQuestions}
                setAnswerdQuestions={setAnswerdQuestions}
                flashcardsStatuses={flashcardsStatuses}
                setFlashcardsStatuses={setFlashcardsStatuses}
                chosenDeck={zapRecallConfig.chosenDeck}
            />
            <Footer answerdQuestions={answerdQuestions} />
            {recallIsOver && (
                <Result
                    answerdQuestions={answerdQuestions}
                    correctAnswersGoal={zapRecallConfig.correctAnswersGoal}
                />
            )}
        </S.StyledMainPage>
    );
};

export default MainPage;
