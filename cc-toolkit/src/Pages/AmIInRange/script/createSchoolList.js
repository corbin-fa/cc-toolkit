import "./allColleges-250513.json";
import allColleges from "./allColleges-250513.json";

import stringSimilarity from "string-similarity";

function generateSchoolList(examType, examScore, inRangeOnly, searchText) {
    let colleges = Object.values(allColleges);

    let newList = [];
    for (let i = 0; i < colleges.length; i++) {
        let c = colleges[i];

        if (searchText != "" && !(stringSimilarity.compareTwoStrings(c.name.toLowerCase(), searchText.toLowerCase()) > 0.5)) {
            continue;
        }

        if (typeof c[examType].min != "number") {
            continue;
        }

        let inRange = false;
        if (c[examType].min <= examScore && examScore <= c[examType].max) {
            inRange = true;
        } else {
            if (inRangeOnly) {
                continue;
            }
            inRange = false;
        }

        newList.push({
            "name": c.name,
            "SAT": c["SAT"],
            "ACT": c["ACT"],
            "inRange": inRange,
        });
    }

    return newList;
}

export { generateSchoolList };