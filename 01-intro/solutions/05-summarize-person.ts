function summarizePerson(id: number, 
    firstName: string, 
    lastName: string, 
    age: number, 
    middleName?: string, 
    hobbies?: string[], 
    workInfo?: [string, number]
): [number, string, number, string, string] {
    const fullName = middleName ? `${firstName} ${middleName} ${lastName}` : `${firstName} ${lastName}`;
    const hobbiesResult = hobbies ? `${hobbies.join(', ')}` : '-';
    const jobDetails = workInfo ? `${workInfo[0]} -> ${workInfo[1]}`: '-';
    return[
        id,
        fullName,
        age,
        hobbiesResult,
        jobDetails
    ]
};

console.log(summarizePerson(12, 'Eliot', 'Des', 20, 'Bryden', ['tennis', 'football', 'hiking'], ['Sales consultant', 2500]))