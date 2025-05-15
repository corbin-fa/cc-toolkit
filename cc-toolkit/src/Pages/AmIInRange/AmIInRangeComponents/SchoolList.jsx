import { useState } from "react";
import "../AmIInRange.css";

import School from "./School.jsx";

function SchoolList({schoolList}) {

    return (
        <div className="school_list_container">
            {
                schoolList.map((s, index) => (
                    <School key={index} name={s.name} />
                ))
            }
        </div>
    );
}

export default SchoolList;