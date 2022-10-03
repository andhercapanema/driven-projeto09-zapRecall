import React, { useState } from "react";
import arrow from "../../assets/img/setinha.svg";
import * as S from "./style";
import { COLORS } from "../../styles/colors";

const Flashcard = ({
    index,
    question: { question, answer },
    answerdQuestions,
    setAnswerdQuestions,
    oneFlashCardIsFlipped,
    thisFlashcardStatus,
    updateFlashcardsStatuses,
}) => {
    const [flashcardText, setFlashcardText] = useState("");

    const flashCardIonIcon = {
        initial: "play-outline",
        incorrect: "close-circle",
        correctWithEfford: "help-circle",
        correct: "checkmark-circle",
    };

    const options = [
        { text: "Não lembrei", color: COLORS.incorrect },
        { text: "Quase não lembrei", color: COLORS.correctWithEfford },
        { text: "Zap!", color: COLORS.correct },
    ];

    function showQuestion() {
        setFlashcardText(question);
        updateFlashcardsStatuses("question", index);
    }

    function showAnswer() {
        setFlashcardText(answer);
        updateFlashcardsStatuses("answer", index);
    }

    function answerFlashcard(answer) {
        const handleAnswer = {
            "Não lembrei": "incorrect",
            "Quase não lembrei": "correctWithEfford",
            "Zap!": "correct",
        };

        updateFlashcardsStatuses(handleAnswer[answer]);

        setAnswerdQuestions([...answerdQuestions, handleAnswer[answer]]);
    }

    return (
        <S.StyledFlashcard
            status={thisFlashcardStatus}
            oneFlashCardIsFlipped={oneFlashCardIsFlipped}
        >
            <S.FlashcardText status={thisFlashcardStatus}>
                {thisFlashcardStatus === "question" ||
                thisFlashcardStatus === "answer"
                    ? flashcardText
                    : `Pergunta ${index + 1}`}
            </S.FlashcardText>
            <ion-icon
                name={flashCardIonIcon[thisFlashcardStatus]}
                onClick={
                    oneFlashCardIsFlipped || thisFlashcardStatus !== "initial"
                        ? () => ""
                        : showQuestion
                }
            ></ion-icon>
            <S.FlashcardArrow
                src={arrow}
                alt="Clique para ver resposta"
                status={thisFlashcardStatus}
                onClick={showAnswer}
            />
            {thisFlashcardStatus === "answer" ? (
                <S.FlashcardOptions>
                    {options.map((option, index) => (
                        <li key={index}>
                            <S.OptionButton
                                color={option.color}
                                onClick={() => answerFlashcard(option.text)}
                            >
                                {option.text}
                            </S.OptionButton>
                        </li>
                    ))}
                </S.FlashcardOptions>
            ) : (
                ""
            )}
        </S.StyledFlashcard>
    );
};

export default Flashcard;
