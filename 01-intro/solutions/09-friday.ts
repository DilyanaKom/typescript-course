function friday13th(arr: unknown[]) : void {
    enum Months{
        January,
        February,
        March,
        April,
        May,
        June,
        July,
        August,
        September,
        October,
        November,
        December

    }
    for (const el of arr) {
        if (el instanceof Date){
            const day = el.getDate();
            const weekDay = el.getDay();

            if(day === 13 && weekDay === 5){
                console.log(`${day}-${Months[el.getMonth()]}-${el.getFullYear()}`);
            }

        }
    }

}

friday13th([
    {},
    new Date(2025, 4, 13),
    null,
    new Date(2025, 5, 13),
    '13-09-2023',
    new Date(2025, 6, 13)
]

)