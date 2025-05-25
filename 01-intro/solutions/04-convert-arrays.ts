function convertArrays(words: string[]) : [string, number]{
    const result = words.join('');
    return [result, result.length];
};

console.log(convertArrays(['How', 'are', 'you?']));