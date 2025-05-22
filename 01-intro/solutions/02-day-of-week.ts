function dayOfWeek(dayNum: number) : void {
    enum Days {
        Monday = 1,
        Tuesday,
        Wednesday,
        Thursday,
        Friday,
        Saturday,
        Sunday
    };

console.log(Days[dayNum])
}
dayOfWeek(1);