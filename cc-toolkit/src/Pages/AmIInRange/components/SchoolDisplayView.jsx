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
                searchTextValue={searchText}
                searchTextSetter={setSearchText} 
                filterByInRangeSetter={setFilterByInRange}
                filterByInRangeValue={filterByInRange}
            />
            <SchoolList 
                schoolList={generateSchoolList(examType, examScore, filterByInRange, searchText)} 
                examType={examType} 
                examScore={examScore}
            />
        </div>
    );
}

export default SchoolDisplayView;