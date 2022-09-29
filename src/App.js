import React, { useState } from "react";
import GlobalStyle from "./styles/GlobalStyle";
import MainPage from "./pages/MainPage";
import LoginPage from "./pages/LoginPage/LoginPage";

const App = () => {
    const [recallHasStarted, setRecallHasStarted] = useState(false);

    return (
        <>
            <GlobalStyle />
            {recallHasStarted ? (
                <MainPage />
            ) : (
                <LoginPage setRecallHasStarted={setRecallHasStarted} />
            )}
        </>
    );
};

export default App;
