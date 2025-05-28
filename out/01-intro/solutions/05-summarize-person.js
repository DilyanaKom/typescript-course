"use strict";
function summarizePerson(id, firstName, lastName, age, middleName, hobbies, workInfo) {
    const fullName = middleName ? `${firstName} ${middleName} ${lastName}` : `${firstName} ${lastName}`;
    const hobbiesResult = hobbies ? `${hobbies.join(', ')}` : '-';
    const jobDetails = workInfo ? `${workInfo[0]} -> ${workInfo[1]}` : '-';
    return [
        id,
        fullName,
        age,
        hobbiesResult,
        jobDetails
    ];
}
;
console.log(summarizePerson(12, 'Eliot', 'Des', 20, 'Bryden', ['tennis', 'football', 'hiking'], ['Sales consultant', 2500]));
//# sourceMappingURL=05-summarize-person.js.map