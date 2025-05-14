import "./App.css";
import Home from "./Pages/home.jsx";
import AmIInRange from "./Pages/AmIInRange/AmIInRange.jsx";
import SatActConverter from "./Pages/SatActConverter.jsx";
import SatGpaConverter from "./Pages/SatGpaConverter.jsx";
import { HashRouter, Routes, Route } from "react-router-dom";

function App() { 

    return (
        <HashRouter>
            <Routes>
                <Route path="/" element={<Home />}/>
                <Route path="/sat-gpa-converter" element={<SatGpaConverter />}/>
                <Route path="/sat-act-converter" element={<SatActConverter />}/>
                <Route path="/am-i-in-range" element={<AmIInRange />}/>
            </Routes>
        </HashRouter>
    );

}

export default App;
