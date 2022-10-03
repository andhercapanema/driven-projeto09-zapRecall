import styled from "styled-components";
import { COLORS } from "../../styles/colors";

export const StyledFooter = styled.footer`
    width: 100%;
    padding: 25px 50px;
    background-color: #fff;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: fixed;
    bottom: 0;
    right: 0;
`;

export const FooterText = styled.h3`
    font-size: 18px;
    line-height: 22px;
    color: #333333;
`;

export const AnswersHistory = styled.ul`
    display: flex;
    margin-top: 6px;
`;

export const AnswerResult = styled.li`
    ion-icon {
        font-size: 27px;
        color: ${({ result }) => COLORS[result]};
    }
`;
