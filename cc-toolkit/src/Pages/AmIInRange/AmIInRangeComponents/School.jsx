import "../AmIInRange.css";

function School({name, inRange}) {
    return <div className="school_item">{name}, {String(inRange)}</div>;
}

export default School;