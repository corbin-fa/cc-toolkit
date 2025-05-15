import "./AmIInRange.css";
import FunctionalComponents from "./AmIInRangeComponents/FunctionalComponents.jsx";

function AmIInRange() {
    return (
        <div className="am-i-in-range-page">
            <h1 style={{margin: "5px"}}>Am I In Range?</h1>
            <FunctionalComponents />
        </div>
    );
}

export default AmIInRange;