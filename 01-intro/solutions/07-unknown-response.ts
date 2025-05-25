function unknownResponse(arg: unknown): string {
    if ('value' in (arg as any) && typeof (arg as any).value === 'string'){
        return (arg as any).value;
    }
    return '-';


}
console.log(unknownResponse({code: 200, text: 'OK', value: [1, 2, 3]}));