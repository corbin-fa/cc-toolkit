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

const gpaSatLUT = [
    {min: 1527, max: 1600, gpa: 4.00},
    {min: 1380, max: 1520, gpa: 3.99},
    {min: 1327, max: 1373, gpa: 3.98},
    {min: 1293, max: 1320, gpa: 3.97},
    {min: 1273, max: 1287, gpa: 3.96},
    {min: 1253, max: 1267, gpa: 3.95},
    {min: 1240, max: 1247, gpa: 3.94},
    {min: 1227, max: 1233, gpa: 3.93},
    {min: 1213, max: 1220, gpa: 3.92},
    {min: 1200, max: 1207, gpa: 3.91},
    {min: 1188, max: 1193, gpa: 3.90},
    {min: 1181, max: 1187, gpa: 3.89},
    {min: 1174, max: 1180, gpa: 3.88},
    {min: 1168, max: 1173, gpa: 3.87},
    {min: 1161, max: 1167, gpa: 3.86},
    {min: 1154, max: 1160, gpa: 3.85},
    {min: 1148, max: 1153, gpa: 3.84},
    {min: 1141, max: 1147, gpa: 3.83},
    {min: 1134, max: 1140, gpa: 3.82},
    {min: 1128, max: 1133, gpa: 3.81},
    {min: 1121, max: 1127, gpa: 3.79},
    {min: 1114, max: 1120, gpa: 3.78},
    {min: 1108, max: 1113, gpa: 3.76},
    {min: 1101, max: 1107, gpa: 3.75},
    {min: 1094, max: 1100, gpa: 3.73},
    {min: 1088, max: 1093, gpa: 3.71},
    {min: 1081, max: 1087, gpa: 3.69},
    {min: 1074, max: 1080, gpa: 3.68},
    {min: 1068, max: 1073, gpa: 3.66},
    {min: 1061, max: 1067, gpa: 3.63},
    {min: 1054, max: 1060, gpa: 3.61},
    {min: 1048, max: 1053, gpa: 3.59},
    {min: 1041, max: 1047, gpa: 3.57},
    {min: 1034, max: 1040, gpa: 3.54},
    {min: 1028, max: 1033, gpa: 3.51},
    {min: 1021, max: 1027, gpa: 3.49},
    {min: 1014, max: 1020, gpa: 3.46},
    {min: 1008, max: 1013, gpa: 3.43},
    {min: 1001, max: 1007, gpa: 3.40},
    {min: 994, max: 1000, gpa: 3.37},
    {min: 988, max: 993, gpa: 3.34},
    {min: 981, max: 987, gpa: 3.31},
    {min: 974, max: 980, gpa: 3.28},
    {min: 968, max: 973, gpa: 3.25},
    {min: 961, max: 967, gpa: 3.22},
    {min: 954, max: 960, gpa: 3.19},
    {min: 948, max: 953, gpa: 3.16},
    {min: 941, max: 947, gpa: 3.12},
    {min: 934, max: 940, gpa: 3.09},
    {min: 928, max: 933, gpa: 3.06},
    {min: 921, max: 927, gpa: 3.02},
    {min: 914, max: 920, gpa: 2.99},
    {min: 908, max: 913, gpa: 2.95},
    {min: 901, max: 907, gpa: 2.92},
    {min: 894, max: 900, gpa: 2.88},
    {min: 888, max: 893, gpa: 2.85},
    {min: 881, max: 887, gpa: 2.81},
    {min: 984, max: 880, gpa: 2.77},
    {min: 868, max: 873, gpa: 2.74},
    {min: 861, max: 867, gpa: 2.70},
    {min: 854, max: 860, gpa: 2.66},
    {min: 848, max: 853, gpa: 2.62},
    {min: 841, max: 847, gpa: 2.58},
    {min: 834, max: 840, gpa: 2.54},
    {min: 828, max: 833, gpa: 2.49},
    {min: 821, max: 827, gpa: 2.44},
    {min: 814, max: 820, gpa: 2.39},
    {min: 808, max: 813, gpa: 2.35},
    {min: 801, max: 807, gpa: 2.30},
    {min: 794, max: 800, gpa: 2.25},
    {min: 788, max: 793, gpa: 2.20},
    {min: 781, max: 787, gpa: 2.15},
    {min: 774, max: 780, gpa: 2.10},
    {min: 768, max: 773, gpa: 2.05},
    {min: 761, max: 767, gpa: 2.00},
    {min: 754, max: 760, gpa: 1.95},
    {min: 748, max: 753, gpa: 1.89},
    {min: 741, max: 747, gpa: 1.84},
    {min: 734, max: 740, gpa: 1.79},
    {min: 728, max: 733, gpa: 1.73},
    {min: 721, max: 727, gpa: 1.68},
    {min: 714, max: 720, gpa: 1.62},
    {min: 708, max: 713, gpa: 1.55},
    {min: 701, max: 707, gpa: 1.48},
    {min: 694, max: 700, gpa: 1.39},
    {min: 688, max: 693, gpa: 1.31},
    {min: 681, max: 687, gpa: 1.23},
    {min: 674, max: 680, gpa: 1.12},
    {min: 668, max: 673, gpa: 0.99},
    {min: 661, max: 667, gpa: 0.87},
    {min: 654, max: 660, gpa: 0.75},
    {min: 648, max: 653, gpa: 0.62},
    {min: 641, max: 647, gpa: 0.48},
    {min: 634, max: 640, gpa: 0.31},
    {min: 628, max: 633, gpa: 0.15},
    {min: 621, max: 627, gpa: 0.02},
    {min: 400, max: 620, gpa: 0.00}
];

function convertGpaToSat(gpa) {

}

function convertGpaToAct(gpa) {
    return convertSatToAct(convertGpaToSat(gpa));
}

function SatActInput() {
    const [satScore, setSatScore] = useState("");
    const [actScore, setActScore] = useState("");
    const [gpaScore, setGpa] = useState("");

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
            <Form.Control
                type="number"
                id="range"
                value={gpaScore || ""}
                onChange={(e) => {
                    let gpa = e.target.value;

                    setGpa(gpa);
                    if (validGpa(gpa)) { 
                        setSatScore(convertGpaToSat(gpa));
                        setActScore(convertGpaToAct(gpa));
                    } else {
                        setSatScore("");
                        setActScore("");
                    }
                }}
                onKeyUp={handleEnter}
            />
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