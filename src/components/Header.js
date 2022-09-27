import React from "react";
import styled from "styled-components";
import logoImg from "../assets/img/logo.png";

function Header() {
    return (
        <StyledHeader>
            <HeaderImg src={logoImg} alt="Logo do ZapRecall" />
            <HeaderText>ZapRecall</HeaderText>
        </StyledHeader>
    );
}

export default Header;

const StyledHeader = styled.header`
    display: flex;
    align-items: center;

    margin-top: 42px;
`;

const HeaderImg = styled.img`
    width: 52px;
    height: 60px;
`;

const HeaderText = styled.h1`
    font-family: "Righteous";
    font-size: 36px;
    letter-spacing: -0.012em;
    color: #fff;
    margin-left: 32px;
`;
