import "../AmIInRange.css";

import School from "./School.jsx";

function SchoolList({schoolList}) {

    return (
        <div className="school_list_container">
            {
                schoolList.map((s, index) => (
                    <School key={index} name={s.name} inRange={s.inRange}/>
                ))
            }
        </div>
    );
}

export default SchoolList;