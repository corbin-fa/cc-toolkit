import "../AmIInRange.css";
import ScoreIllustration from "./ScoreIllustration.jsx";

function School({name, inRange, sMin, sMax, examScore}) {
    return (
    <div className="school_item">
        <div className="school_item_name_container">{name}</div> 
        <div><ScoreIllustration inRange={inRange} sMin={sMin} sMax={sMax} studentScore={examScore}/></div>

    </div>
);
}

export default School;