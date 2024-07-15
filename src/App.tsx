import React from "react";
import {Route, Routes} from "react-router-dom";
import {MainPage} from "./pages/MainPage";
import {AuthPage} from "./pages/AuthPage";
import {SettingsPage} from "./pages/SettingsPage";
import {Navigation} from "./components/Navigation";

function App() {
    return (
        <div className="container">
            <div className="header__inner">
                <Navigation/>
                <Routes>
                    <Route path="/" element={<MainPage/>}></Route>
                    <Route path="/auth" element={<AuthPage />}></Route>
                    <Route path="/settings/:id" element={<SettingsPage />}></Route>
                </Routes>
            </div>
        </div>
    )
}

export default App;