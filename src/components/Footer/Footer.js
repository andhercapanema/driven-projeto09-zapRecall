import React from "react";
import * as S from "./style";

function Footer({ answerdQuestions }) {
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
                    <S.AnswerResult key={index} result={result}>
                        <ion-icon name={handleIonIcon[result]}></ion-icon>
                    </S.AnswerResult>
                ))}
            </S.AnswersHistory>
        </S.StyledFooter>
    );
}

export default Footer;
