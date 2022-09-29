import React, { useState } from "react";
import Footer from "../../components/Footer/Footer";
import Deck from "../../components/Deck";
import Header from "../../components/Header";
import * as S from "./style";

const MainPage = ({ chosenDeck }) => {
    const [answerdQuestions, setAnswerdQuestions] = useState([]);
    const COLORS = {
        incorrect: "#ff3030",
        correctWithEfford: "#ff922e",
        correct: "#2fbe34",
    };

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
        </S.StyledMainPage>
    );
};

export default MainPage;
