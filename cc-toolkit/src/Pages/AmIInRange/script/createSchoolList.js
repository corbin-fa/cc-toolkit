import "./allColleges-250513.json";
import allColleges from "./allColleges-250513.json";

function generateSchoolList(examType, examScore, inRangeOnly) {
    let colleges = Object.values(allColleges);

    let newList = [];
    for (let i = 0; i < colleges.length; i++) {
        let c = colleges[i];
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