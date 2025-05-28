function optionalMultiplier(
    param1? : string | number, 
    param2? : string | number, 
    param3? : string | number){
    
        let num1 = param1 != undefined ? Number(param1) : 1;
        let num2 = param2 != undefined ? Number(param2) : 1;
        let num3 = param3 != undefined ? Number(param3) : 1;

        return num1*num2*num3;


    

}

console.log(optionalMultiplier(undefined, 5, '10'));