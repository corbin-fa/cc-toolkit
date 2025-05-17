import SchoolList from "./SchoolList.jsx";
import { generateSchoolList } from "../script/createSchoolList.js";
import SchoolFilterMenu from "./SchoolFilterMenu.jsx";

import { useState } from "react";

import "../AmIInRange.css";

function SchoolDisplayView({examType, examScore}) {

    const [searchText, setSearchText] = useState("");
    const [filterByInRange, setFilterByInRange] = useState(false);

    return (
        <div className="school_display_view">
            <SchoolFilterMenu 
                searchTextSetter={setSearchText} 
                filterByInRangeSetter={setFilterByInRange}
                filterByInRangeValue={filterByInRange}
            />
            <SchoolList 
                schoolList={generateSchoolList(examType, examScore, filterByInRange)} 
                examType={examType} 
                examScore={examScore}
            />
        </div>
    );
}

export default SchoolDisplayView;