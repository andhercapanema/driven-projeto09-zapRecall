import React, { useEffect } from "react";
import logoImg from "../../assets/img/logo.svg";
import * as S from "./style";

const LoginPage = ({
    setRecallHasStarted,
    DECKS,
    chosenDeck,
    setChosenDeck,
    correctAnswersGoal,
    setCorrectAnswersGoal,
}) => {
    const readyToStart =
        chosenDeck !== "default" &&
        correctAnswersGoal >= 1 &&
        correctAnswersGoal <= 8;

    /* ------------------------------- */
    // start pressing enter [fonte: https://stackoverflow.com/questions/33211672/how-to-submit-a-form-using-enter-key-in-react-js]

    useEffect(() => {
        const listener = (event) => {
            if (event.code === "Enter" || event.code === "NumpadEnter") {
                readyToStart && setRecallHasStarted(true);
            }
        };
        document.addEventListener("keydown", listener);
        return () => {
            document.removeEventListener("keydown", listener);
        };
    });

    /* ------------------------------- */

    return (
        <S.StyledLoginPage>
            <S.LoginImg src={logoImg} alt="Logo do ZapRecall" />
            <S.LoginText>ZapRecall</S.LoginText>
            <S.LoginSelectWrapper>
                <S.LoginSelectDeck
                    name="decks"
                    required
                    onChange={(e) =>
                        setChosenDeck(
                            DECKS.filter(
                                (deck) => deck.name === e.target.value
                            )[0]
                        )
                    }
                    defaultValue="default"
                    chosenDeck={chosenDeck}
                >
                    <option value="default" disabled hidden>
                        Escolha seu deck
                    </option>
                    {DECKS.map((deck) => (
                        <option key={deck.name} value={deck.name}>
                            {deck.name}
                        </option>
                    ))}
                </S.LoginSelectDeck>
                <ion-icon name="chevron-down-outline"></ion-icon>
            </S.LoginSelectWrapper>
            <S.LoginGoalInput
                type="number"
                name="correct-goal"
                min="1"
                max="8"
                placeholder="Digite sua meta de zaps (1 - 8)"
                onChange={(e) => setCorrectAnswersGoal(e.target.value)}
                correctAnswersGoal={correctAnswersGoal}
            />
            <S.LoginButton
                onClick={
                    readyToStart ? () => setRecallHasStarted(true) : () => ""
                }
                readyToStart={readyToStart}
            >
                Iniciar Recall!
            </S.LoginButton>
        </S.StyledLoginPage>
    );
};

export default LoginPage;
