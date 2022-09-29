import React from "react";
import * as S from "./style";

function Footer({ answerdQuestions, COLORS }) {
    const handleIonIcon = {
        incorrect: "close-circle",
        correctWithEfford: "help-circle",
        correct: "checkmark-circle",
    };

    return (
        <S.StyledFooter>
            <S.FooterText>{answerdQuestions.length}/8 CONCLUÍDOS</S.FooterText>
            <S.AnswersHistory>
                {answerdQuestions.map((result, index) => (
                    <S.AnswerResult key={index} COLORS={COLORS} result={result}>
                        <ion-icon name={handleIonIcon[result]}></ion-icon>
                    </S.AnswerResult>
                ))}
            </S.AnswersHistory>
        </S.StyledFooter>
    );
}

export default Footer;
