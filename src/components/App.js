import React from "react";
import GlobalStyle from "../styles/GlobalStyle";
import Footer from "./Footer";
import Deck from "./Deck";
import Header from "./Header";
import styled from "styled-components";

function App() {
    return (
        <Page>
            <GlobalStyle />
            <Header />
            <Deck />
            <Footer />
        </Page>
    );
}

export default App;

const Page = styled.main`
    display: flex;
    flex-direction: column;
    align-items: center;
    background: #fb6b6b;
`;
