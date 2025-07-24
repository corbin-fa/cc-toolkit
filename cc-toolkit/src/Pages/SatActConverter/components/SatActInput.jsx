import "../SatActConverter.css";

import { useEffect, useState } from "react";

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

function validAct(act) {
    return act <= 36 && act >= 1;
}

function validGpa(gpa) {
    return 0 <= gpa && gpa <= 4;
}

function convertSatToAct(sat) {
    sat = Math.round(sat / 10) * 10;

    if (!validSat) {
        return;
    }

    // TODO: simplify this
    switch (true) {
        case sat >= 1450:
            return 36 - (40 - Math.ceil(sat / 40));
        case sat >= 1300:
            return 32 - (48 - Math.ceil(sat / 30));
        case sat >= 1260:
            return 27;
        case sat >= 1230:
            return 26;
        case sat >= 1200:
            return 25;
        case sat >= 1160:
            return 24;
        case sat >= 1130:
            return 23;
        case sat >= 1100:
            return 22;
        case sat >= 1060:
            return 21;
        case sat >= 1030:
            return 20;
        case sat >= 990:
            return 19;
        case sat >= 960:
            return 18;
        case sat >= 920:
            return 17;
        case sat >= 880:
            return 16;
        case sat >= 830:
            return 15;
        case sat >= 780:
            return 14;
        case sat >= 730:
            return 13;
        case sat >= 690:
            return 12;
        case sat >= 650:
            return 11;
        case sat >= 620:
            return 10;
        case sat >= 590:
            return 9;
        default:
            console.error(sat + " was an unhandled sat score");
            return;
    }  
    // if (1570 <= sat && sat <= 1600) {
    //     return 36;
    // } else if (1530 <= sat ** sat <=1560) {
    //     return 35;
    // }
}

function convertActToSat(act) {
    act = Number(act);

    if (!validAct(act)) {
        return;
    }

    // TODO: simplify this
    switch (true) {
        case act === 36:
            return 1590;
        case act === 35:
            return 1540;
        case act === 34:
            return 1500;
        case act === 33:
            return 1460;
        case act === 32:
            return 1430;
        case act === 31:
            return 1400;
        case act === 30:
            return 1370;
        case act === 29:
            return 1340;
        case act === 28:
            return 1310;
        case act === 27:
            return 1280;
        case act === 26:
            return 1240;
        case act === 25:
            return 1210;
        case act === 24:
            return 1180;
        case act === 23:
            return 1140;
        case act === 22:
            return 1110;
        case act === 21:
            return 1080;
        case act === 20:
            return 1040;
        case act === 19:
            return 1010;
        case act === 18:
            return 970;
        case act === 17:
            return 930;
        case act === 16:
            return 890;
        case act === 15:
            return 850;
        case act === 14:
            return 800;
        case act === 13:
            return 760;
        case act === 12:
            return 710;
        case act === 11:
            return 670;
        case act === 10:
            return 630;
        case act === 9:
            return 590;
        default:
            return;
    }
}

function SatActInput() {
    const [satScore, setSatScore] = useState("");
    const [actScore, setActScore] = useState("");

    useEffect(() => {
        console.log(satScore, actScore);
    });

    return (
        <>
        <div className="sat_act_input_container">
            <Form.Label className="input_form_label">SAT</Form.Label>
            <Form.Control
                type="number"
                id="range"
                value={satScore || ""}
                onChange={(e) => {
                    let sat = e.target.value;

                    setSatScore(sat);
                    if (validSat(sat)) {
                        setActScore(convertSatToAct(sat));
                    } else {
                        setActScore("");
                    }
                }}
                onKeyUp={handleEnter}
                />
            <Form.Label className="input_form_label">ACT</Form.Label>
            <Form.Control
                type="number"
                id="range"
                value={actScore || ""}
                onChange={(e) => {
                    let act = e.target.value;

                    setActScore(act);
                    if (validAct(act)) { 
                        setSatScore(convertActToSat(act));
                    } else {
                        setSatScore("");
                    }
                }}
                onKeyUp={handleEnter}
                />
            <Form.Label className="input_form_label">GPA</Form.Label> 
        </div>
        {satScore !== "" && (satScore < 590 || satScore > 1600) && (
            <p style={{ color: "red" }}>SAT score must be between 400 and 1600</p>
        )}
        {actScore !== "" && (actScore < 1 || actScore > 36) && (
            <p style={{ color: "red" }}>ACT score must be between 1 and 36</p>
        )}
        </>
    );
}

export default SatActInput;