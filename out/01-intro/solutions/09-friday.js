"use strict";
function friday13th(arr) {
    let Months;
    (function (Months) {
        Months[Months["January"] = 0] = "January";
        Months[Months["February"] = 1] = "February";
        Months[Months["March"] = 2] = "March";
        Months[Months["April"] = 3] = "April";
        Months[Months["May"] = 4] = "May";
        Months[Months["June"] = 5] = "June";
        Months[Months["July"] = 6] = "July";
        Months[Months["August"] = 7] = "August";
        Months[Months["September"] = 8] = "September";
        Months[Months["October"] = 9] = "October";
        Months[Months["November"] = 10] = "November";
        Months[Months["December"] = 11] = "December";
    })(Months || (Months = {}));
    for (const el of arr) {
        if (el instanceof Date) {
            const day = el.getDate();
            const weekDay = el.getDay();
            if (day === 13 && weekDay === 5) {
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
]);
//# sourceMappingURL=09-friday.js.map