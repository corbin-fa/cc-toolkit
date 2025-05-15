import "./allColleges-250513.json";
import allColleges from "./allColleges-250513.json";

function generateSchoolList(examType, examScore) {
    return Object.values(allColleges);
}

export { generateSchoolList };