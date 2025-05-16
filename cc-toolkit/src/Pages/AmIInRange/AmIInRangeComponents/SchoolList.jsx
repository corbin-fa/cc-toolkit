import "../AmIInRange.css";

import School from "./School.jsx";

function SchoolList({schoolList, examType, examScore}) {

    return (
        <div className="school_list_container">
            {
                schoolList.map((s, index) => (
                    <School key={index}
                        name={s.name}
                        inRange={s.inRange}
                        sMin={s[examType].min}
                        sMax={s[examType].max}
                        examScore={examScore}
                    />
                ))
            }
        </div>
    );
}

export default SchoolList;