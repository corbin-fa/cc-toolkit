import "../AmIInRange.css";
import 'bootstrap/dist/css/bootstrap.min.css';

import ToggleButton from 'react-bootstrap/ToggleButton';
import ToggleButtonGroup from 'react-bootstrap/ToggleButtonGroup';
import Form from 'react-bootstrap/Form';

function InputField() {
    return (
        <div className="input-bar">
            <ToggleButtonGroup type="radio" name="options" defaultValue={1}>
                <ToggleButton id="tbg-radio-1" value={1}>
                SAT
                </ToggleButton>
                <ToggleButton id="tbg-radio-2" value={2}>
                ACT
                </ToggleButton>
            </ToggleButtonGroup>
            <Form.Control
                type="number"
                id="range"
                placeholder= "Exam Score..."
                /*
                min: //TODO: ;
                max: //TODO:
                */
            />
        </div>
    );
}

export default InputField;