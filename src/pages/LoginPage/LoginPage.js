import React from "react";
import logoImg from "../../assets/img/logo.svg";
import * as S from "./style";

const LoginPage = ({ setRecallHasStarted }) => {
    return (
        <S.StyledLoginPage>
            <S.LoginImg src={logoImg} alt="Logo do ZapRecall" />
            <S.LoginText>ZapRecall</S.LoginText>
            <S.LoginButton onClick={() => setRecallHasStarted(true)}>
                Iniciar Recall!
            </S.LoginButton>
        </S.StyledLoginPage>
    );
};

export default LoginPage;
