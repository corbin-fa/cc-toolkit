import "./AmIInRange.css";
import FunctionalComponents from "./AmIInRangeComponents/FunctionalComponents.jsx";
import Button from 'react-bootstrap/Button';

import { Link } from 'react-router-dom';

function AmIInRange() {
    return (
        <div className="am-i-in-range-page">
            <Link to="/" style={{margin: "8px", position: "absolute"}}>
                <Button 
                    variant="primary"
                >
                    Return Home
                </Button>
            </Link>
            <h1 style={{margin: "5px"}}>Am I In Range?</h1>
            <FunctionalComponents />
        </div>
    );
}

export default AmIInRange;