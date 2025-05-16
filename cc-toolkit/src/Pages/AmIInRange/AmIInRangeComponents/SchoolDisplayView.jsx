import SchoolList from "./SchoolList.jsx";
import { generateSchoolList } from "../script/createSchoolList.js";

import "../AmIInRange.css";

function SchoolDisplayView({examType, examScore}) {

    return (
        <div className="school_display_view">
            <SchoolList schoolList={generateSchoolList(examType, examScore)}/>
        </div>
    );
}

export default SchoolDisplayView;