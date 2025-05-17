function ScoreIllustration({inRange, sMin, sMax, studentScore}) {
    if (inRange) {
        return <ScoreIllustrationInRange 
                studentScore={studentScore} 
                sMin={sMin} 
                sMax={sMax} 
            />;
    } else if (studentScore < sMin) {
        return <ScoreIllustrationBelowRange 
                    studentScore={studentScore}
                    sMin={sMin}
                    sMax={sMax}
                />;
    } else if (studentScore > sMax) {
        return <ScoreIllustrationAboveRange  
            studentScore={studentScore}
            sMin={sMin}
            sMax={sMax}
        />
    }
}

function ScoreIllustrationAboveRange({sMin, sMax, studentScore}) {
    let schoolRangeWidth = ((sMax - sMin) / (studentScore-sMin)) * 100;

    return (
        <>
        <div class="score_illustration_above_range">
            <div class="above_range_school_range" style={{width: `${schoolRangeWidth}%`}}>
                <div className="above_range_score_illustration_line"></div>
            </div>
            <div class="above_range_score_indicator"></div>
        </div>
        <div className="above_range_score_labels" style={{width: `${schoolRangeWidth}%`}}>
                <div style={{marginRight: "auto"}}>{sMin}</div>
                <div style={{marginLeft: "auto"}}>{sMax}</div>
        </div>
        </>
    );
}

function ScoreIllustrationBelowRange({sMin, sMax, studentScore}) {
    let schoolRangeWidth = ((sMax - sMin) / (sMax-studentScore)) * 100;

    return (
        <>
        <div class="score_illustration_below_range">
            <div class="below_range_score_indicator"></div>
            <div class="below_range_school_range" style={{width: `${schoolRangeWidth}%`}}>
                <div className="below_range_score_illustration_line"></div>
            </div>
        </div>
        <div className="below_range_score_labels" style={{width: `${schoolRangeWidth}%`}}>
                <div style={{marginRight: "auto"}}>{sMin}</div>
                <div style={{marginLeft: "auto"}}>{sMax}</div>
        </div>
        </>
    );
}

function ScoreIllustrationInRange({sMin, sMax, studentScore}) {
    let studentScoreToPercent = ((studentScore - sMin) / (sMax - sMin)) * 100;

    return (
        <div>
            <div className="score_illustration_in_range">
                <div>
                    <div className="score_illustration_line"></div>
                    <div className="student_score_indicator" style={{left: `calc(${studentScoreToPercent}% - 7px)`}}></div>
                </div>
            </div>
            <div className="labels_container">
                <div className="school_min_label">{sMin}</div>
                <div className="school_max_label">{sMax}</div>
            </div>
        </div>
    );
}

export default ScoreIllustration;