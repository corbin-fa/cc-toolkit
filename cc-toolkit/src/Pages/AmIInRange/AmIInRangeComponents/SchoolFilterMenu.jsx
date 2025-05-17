import "../AmIInRange.css";
import "bootstrap/dist/css/bootstrap.min.css";

import { useEffect } from "react";

import ToggleButton from 'react-bootstrap/ToggleButton';

function SchoolFilterMenu({searchTextSetter, filterByInRangeSetter, filterByInRangeValue}) {


    useEffect(() => {
        console.log(filterByInRangeValue);
    });

    return (
        <div className="filters_container">
            <ToggleButton
        className="mb-2"
        id="toggle-check"
        type="checkbox"
        checked={filterByInRangeValue}
        value="1"
        onChange={(e) => {
            filterByInRangeSetter(e.currentTarget.checked)
        }}
      >
        In Range Only
      </ToggleButton>
        </div>
    );
}

export default SchoolFilterMenu;