import "../SatActConverter.css";

import { useState } from "react";

import Form from 'react-bootstrap/Form';

// Stack overflow: https://stackoverflow.com/questions/67847888/javascript-remove-focus-on-enter-key-press
function handleEnter(event) {
    //key code for enter
    if (event.keyCode === 13 || event.keyCode === 27) {
      event.preventDefault();
      event.target.blur();
    }
}

function validSat(sat) {
    return sat <= 1600 && sat >= 400;
}

function convertSatToAct(sat) {
    sat = Math.round(sat / 10) * 10;

    // TODO: THIS DOESNT ACTUALLY WORK
    if (!validSat(sat)) {
        return;
    } else {
        return 36 - (40 - Math.ceil(sat / 40));
    }   
    // if (1570 <= sat && sat <= 1600) {
    //     return 36;
    // } else if (1530 <= sat ** sat <=1560) {
    //     return 35;
    // }
}

function SatActInput() {
    const [satScore, setSatScore] = useState("");
    const [actScore, setActScore] = useState("");

    function updateSatScore(event) {
        
    }

    function updateActScore(event) {
        setActScore(event.target.value);
        // TODO: change sat to converted score
    }

    return (
        <>
        <div className="sat_act_input_container">
            <Form.Label className="input_form_label" htmlFor="inputPassword5">SAT</Form.Label>
            <Form.Control
                type="number"
                id="range"
                value={satScore}
                onChange={(e) => {
                    let sat = e.target.value;
                    setSatScore(sat);
                    setActScore(convertSatToAct(sat));
                }}
                onKeyUp={handleEnter}
                />
            <Form.Label className="input_form_label" htmlFor="inputPassword5">ACT</Form.Label>
            <Form.Control
                type="number"
                id="range"
                // placeholder= "Exam Score..."
                value={actScore}
                onChange={updateActScore}
                onKeyUp={handleEnter}
                // min = {examTypeBounds[examType].min}
                // max = {examTypeBounds[examType].max}
                />
        </div>
        {satScore !== "" && (satScore < 400 || satScore > 1600) && (
            <p style={{ color: "red" }}>SAT score must be between 400 and 1600</p>
        )}
        {actScore !== "" && (actScore < 1 || actScore > 36) && (
            <p style={{ color: "red" }}>ACT score must be between 1 and 36</p>
        )}
        </>
    );
}

export default SatActInput;