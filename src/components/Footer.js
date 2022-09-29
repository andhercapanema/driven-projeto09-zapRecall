import React, { useState } from "react";
import styled from "styled-components";

function Footer({ flashcardsStatuses, setFlashcardsStatuses, COLORS }) {
    const options = [
        { text: "Não lembrei", color: COLORS.incorrect },
        { text: "Quase não lembrei", color: COLORS.correctWithEfford },
        { text: "Zap!", color: COLORS.correct },
    ];

    const oneFlashCardIsInAnswer =
        flashcardsStatuses.filter((status) => status === "answer").length !== 0;

    const [answerdQuestions, setAnswerdQuestions] = useState(0);

    function answerFlashcard(answer) {
        const indexQuestion = flashcardsStatuses.indexOf("answer");
        const handleAnswer = {
            "Não lembrei": "incorrect",
            "Quase não lembrei": "correctWithEfford",
            "Zap!": "correct",
        };

        flashcardsStatuses[indexQuestion] = handleAnswer[answer];

        setFlashcardsStatuses([...flashcardsStatuses]);

        setAnswerdQuestions((prev) => prev + 1);
    }

    return (
        <StyledFooter>
            <FooterOptions>
                {options.map((option, index) => (
                    <li key={index}>
                        <FooterButton
                            color={option.color}
                            oneFlashCardIsInAnswer={oneFlashCardIsInAnswer}
                            onClick={
                                oneFlashCardIsInAnswer
                                    ? () => answerFlashcard(option.text)
                                    : () => ""
                            }
                        >
                            {option.text}
                        </FooterButton>
                    </li>
                ))}
            </FooterOptions>
            <FooterText>{answerdQuestions}/8 CONCLUÍDOS</FooterText>
        </StyledFooter>
    );
}

export default Footer;

const StyledFooter = styled.footer`
    width: 100%;
    height: 110px;
    background-color: #fff;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 0 50px;
    position: fixed;
    bottom: 0;
    right: 0;
`;

const FooterOptions = styled.ul`
    display: flex;
    justify-content: space-between;
    width: 100%;
    margin-bottom: 20px;
`;

const FooterButton = styled.button`
    height: 37px;
    width: 85px;
    font-size: 12px;
    line-height: 14px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #fff;
    background-color: ${(props) => props.color};
    border-radius: 5px;
    border: none;
    cursor: ${(props) => (props.oneFlashCardIsInAnswer ? "pointer" : "auto")};
`;

const FooterText = styled.h3`
    font-size: 18px;
    line-height: 22px;
    color: #333333;
`;
