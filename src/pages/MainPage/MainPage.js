import React, { useState } from "react";
import Footer from "../../components/Footer/Footer";
import Deck from "../../components/Deck";
import Header from "../../components/Header";
import * as S from "./style";
import Result from "../../components/Result/Result";

const MainPage = ({ chosenDeck, correctAnswersGoal }) => {
    const [answerdQuestions, setAnswerdQuestions] = useState([]);
    const COLORS = {
        incorrect: "#ff3030",
        correctWithEfford: "#ff922e",
        correct: "#2fbe34",
    };
    const recallIsOver = answerdQuestions.length === 8;

    return (
        <S.StyledMainPage>
            <Header />
            <Deck
                answerdQuestions={answerdQuestions}
                setAnswerdQuestions={setAnswerdQuestions}
                COLORS={COLORS}
                chosenDeck={chosenDeck}
            />
            <Footer answerdQuestions={answerdQuestions} COLORS={COLORS} />
            {recallIsOver && (
                <Result
                    answerdQuestions={answerdQuestions}
                    correctAnswersGoal={correctAnswersGoal}
                />
            )}
        </S.StyledMainPage>
    );
};

export default MainPage;
