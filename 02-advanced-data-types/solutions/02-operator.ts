function operator(param: string | string[] | number, 
    operator: 'Index' | 'Length' | 'Add', 
    operand: number){
        if(operator === 'Index' && typeof param !== 'number'){
            return param[operand];
        };

        if(operator === 'Length' && typeof param !== 'number'){
            return param.length % operand;
        };

        if(operator === 'Add' && typeof !Array.isArray(param)){
            return Number(param) + operand;
        }
};

// console.log(operator(['First', 'Second', 'Third'], 'Index',1));
console.log(operator('string', 'Index',1));