function ScoreIllustration({inRange, sMin, sMax, studentScore}) {
    if (inRange) {
        return <ScoreIllustrationInRange studentScore={studentScore} sMin={sMin} sMax={sMax} />;
    }
}

function ScoreIllustrationInRange({sMin, sMax, studentScore}) {
    console.log(sMin, sMax, studentScore);
    let studentScoreToPercent = ((studentScore - sMin) / (sMax - sMin)) * 100;

    return (
        <div className="score_illustration_in_range">
            <div className="score_illustration_line"></div>
            <div className="student_score_indicator" style={{left: `${studentScoreToPercent}%`}}></div>
        </div>
    );
}

export default ScoreIllustration;