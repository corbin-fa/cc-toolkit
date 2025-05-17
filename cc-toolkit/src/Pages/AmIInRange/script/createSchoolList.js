import "./allColleges-250513.json";
import allColleges from "./allColleges-250513.json";

function generateSchoolList(examType, examScore, inRangeOnly, searchText) {
    let colleges = Object.values(allColleges);

    let newList = [];
    for (let i = 0; i < colleges.length; i++) {
        let c = colleges[i];

        // TODO: change tool so that common nicknames of schools are also searchable
        const regex = new RegExp(searchText, "i");
        if (searchText !== "" && !regex.test(c.name)) {
            continue;
        }

        if (typeof c[examType].min !== "number") {
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