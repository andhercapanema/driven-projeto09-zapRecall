import React from "react";
import * as S from "./style";

function Result({ answerdQuestions, correctAnswersGoal }) {
    const handleResult = {
        suceed: {
            text: `Parabéns, você bateu sua meta!`,
            image: "https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/twitter/322/partying-face_1f973.png",
        },
        failed: {
            text: `Putz, você não bateu sua meta!`,
            image: "https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/twitter/322/sad-but-relieved-face_1f625.png",
        },
    };

    const result =
        answerdQuestions.filter(
            (questionResult) => questionResult === "correct"
        ).length >= correctAnswersGoal
            ? "suceed"
            : "failed";

    console.log("answerdQuestions", answerdQuestions);
    console.log("correctAnswersGoal", correctAnswersGoal);

    return (
        <S.ResultMain>
            <S.ResultCard>
                <S.ResultImage
                    src={handleResult[result].image}
                    alt="Logo do ZapRecall"
                />
                <S.ResultText>{handleResult[result].text}</S.ResultText>
            </S.ResultCard>
        </S.ResultMain>
    );
}

export default Result;
