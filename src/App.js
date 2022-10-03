import React, { useState } from "react";
import GlobalStyle from "./styles/GlobalStyle";
import MainPage from "./pages/MainPage/MainPage";
import LoginPage from "./pages/LoginPage/LoginPage";

const App = () => {
    const [recallHasStarted, setRecallHasStarted] = useState(false);
    const [zapRecallConfig, setZapRecallConfig] = useState({
        chosenDeck: "default",
        correctAnswersGoal: 0,
    });

    return (
        <>
            <GlobalStyle />
            {recallHasStarted ? (
                <MainPage zapRecallConfig={zapRecallConfig} />
            ) : (
                <LoginPage
                    setRecallHasStarted={setRecallHasStarted}
                    zapRecallConfig={zapRecallConfig}
                    setZapRecallConfig={setZapRecallConfig}
                />
            )}
        </>
    );
};

export default App;
