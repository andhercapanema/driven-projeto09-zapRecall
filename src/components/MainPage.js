import React, { useState } from "react";
import Footer from "./Footer";
import Deck from "./Deck";
import Header from "./Header";
import styled from "styled-components";

function MainPage() {
    const [flashcardIsFlipped, setFlashcardIsFlipped] = useState(false);

    return (
        <StyledPage>
            <Header />
            <Deck
                flashcardIsFlipped={flashcardIsFlipped}
                setFlashcardIsFlipped={setFlashcardIsFlipped}
            />
            <Footer flashcardIsFlipped={flashcardIsFlipped} />
        </StyledPage>
    );
}

export default MainPage;

const StyledPage = styled.main`
    display: flex;
    flex-direction: column;
    align-items: center;
    background: #fb6b6b;
`;
