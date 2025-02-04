import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { MainPage } from "./components/pages/main/main";
import { FilmPage } from "./components/pages/film/film"
import { NotFound } from "./components/common/not-found";
import { HomePage } from "./components/pages/home/home";
import { SpeedInsights } from "@vercel/speed-insights/react";

const App = () => {
    return (
        <>
            <Router>
                <Routes>
                    <Route path="/" element={<MainPage />} />
                    <Route path="/movie/:id" element={<FilmPage />} />
                    <Route path="/home" element={<HomePage />} />
                    <Route path="/*" element={<NotFound />} />
                </Routes>
            </Router>
            <SpeedInsights />
        </>
    )
};

export default App;
