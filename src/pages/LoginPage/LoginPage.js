import React from "react";
import logoImg from "../../assets/img/logo.svg";
import * as S from "./style";

const LoginPage = ({
    setRecallHasStarted,
    DECKS,
    chosenDeck,
    setChosenDeck,
}) => {
    console.log(chosenDeck);

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
            <S.LoginButton onClick={() => setRecallHasStarted(true)}>
                Iniciar Recall!
            </S.LoginButton>
        </S.StyledLoginPage>
    );
};

export default LoginPage;
