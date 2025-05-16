import "./allColleges-250513.json";
import allColleges from "./allColleges-250513.json";

function generateSchoolList(examType, examScore) {
    let colleges = Object.values(allColleges);

    let newList = [];
    colleges.forEach((c) => {
        let inRange = false;
        if (c[examType].min <= examScore && examScore <= c[examType].max) {
            inRange = true;
        } else {
            inRange = false;
        }

        newList.push({
            "name": c.name,
            "SAT": c["SAT"],
            "ACT": c["ACT"],
            "inRange": inRange,
        });
    });

    console.log(newList);
    return newList;
}

export { generateSchoolList };