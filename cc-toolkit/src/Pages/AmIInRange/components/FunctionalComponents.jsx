import "../AmIInRange.css";
import 'bootstrap/dist/css/bootstrap.min.css';

import SchoolDisplayView from "./SchoolDisplayView.jsx";

import ToggleButton from 'react-bootstrap/ToggleButton';
import ToggleButtonGroup from 'react-bootstrap/ToggleButtonGroup';
import Form from 'react-bootstrap/Form';

import { useState } from "react";

const examTypeBounds = {
    "ACT": {
        min: 1,
        max: 36
    },
    "SAT": {
        min: 400,
        max: 1600
    }
}

function FunctionalComponents() {
    const [examType, setExamType] = useState("SAT");
    const [examScore, setExamScore] = useState("");

    function updateExamType(newValue) {
        setExamType(newValue);
    }

    function updateExamScore(newValue) {
        setExamScore(newValue.target.value);
    }

    // Stack overflow: https://stackoverflow.com/questions/67847888/javascript-remove-focus-on-enter-key-press
    function handleEnter(event) {
        //key code for enter
        if (event.keyCode === 13 || event.keyCode === 27) {
          event.preventDefault();
          event.target.blur();
        }
    }


    return (
        <div className="container">
            <div className="input-bar">
            <ToggleButtonGroup 
                type="radio" 
                name="options" 
                defaultValue={"SAT"}
                value={examType}
                onChange={updateExamType}
            >
                <ToggleButton id="tbg-radio-1" value={"SAT"}>
                <div className="radio-label">SAT</div>
                </ToggleButton>
                <ToggleButton id="tbg-radio-2" value={"ACT"}>
                <div className="radio-label">ACT</div>
                </ToggleButton>
            </ToggleButtonGroup>
            <div className="exam-score-input-label">Exam Score:</div> 
            <Form.Control
                type="number"
                id="range"
                // placeholder= "Exam Score..."
                value={examScore}
                onChange={updateExamScore}
                onKeyUp={handleEnter}
                // min = {examTypeBounds[examType].min}
                // max = {examTypeBounds[examType].max}
                />
            </div>
            {examScore && (examScore < examTypeBounds[examType].min || examScore > examTypeBounds[examType].max) && (
                <p style={{ color: "red" }}>Value must be between {examTypeBounds[examType].min} and {examTypeBounds[examType].max}</p>
            )}

            <SchoolDisplayView examScore={examScore} examType={examType}/>
        </div>
    );
}

export default FunctionalComponents;