import React from "react";
import * as S from "./style";
import logoImg from "../../assets/img/logo.svg";

const Header = () => {
    return (
        <S.StyledHeader>
            <S.HeaderImg src={logoImg} alt="Logo do ZapRecall" />
            <S.HeaderText>ZapRecall</S.HeaderText>
        </S.StyledHeader>
    );
};

export default Header;
