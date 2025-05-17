import "../AmIInRange.css";
import "bootstrap/dist/css/bootstrap.min.css";

import { useEffect } from "react";

import ToggleButton from 'react-bootstrap/ToggleButton';
import Form from 'react-bootstrap/Form';

function SchoolFilterMenu({searchTextValue, searchTextSetter, filterByInRangeSetter, filterByInRangeValue}) {


    useEffect(() => {
        console.log(filterByInRangeValue);
        console.log(searchTextValue);
    });

    return (
        <div className="filters_container">
        <ToggleButton
            className="filters_in_range_checkbox"
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

        <Form.Label className="filters_search_label" htmlFor="inputPassword5">Search</Form.Label>
            <Form.Control
                type="text"
                value={searchTextValue}
                onChange={(e) => searchTextSetter(e.target.value)}
            />
        </div>
    );
}

export default SchoolFilterMenu;