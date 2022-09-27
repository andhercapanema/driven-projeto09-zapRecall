import React from "react";
import styled from "styled-components";

function Footer() {
    const options = [
        { text: "Não lembrei", color: "#ff3030" },
        { text: "Quase não lembrei", color: "#ff922e" },
        { text: "Zap!", color: "#2fbe34" },
    ];

    return (
        <StyledFooter>
            <FooterOptions>
                {options.map((option) => (
                    <li>
                        <FooterButton color={option.color}>
                            {option.text}
                        </FooterButton>
                    </li>
                ))}
            </FooterOptions>
            <FooterText>0/8 CONCLUÍDOS</FooterText>
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
`;

const FooterText = styled.h3`
    font-size: 18px;
    line-height: 22px;
    color: #333333;
`;
