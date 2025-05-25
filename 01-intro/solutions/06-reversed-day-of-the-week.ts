function reverseDay(day: string): void {
    enum Days {
        Monday = 1,
        Tuesday,
        Wednesday,
        Thursday,
        Friday,
        Saturday,
        Sunday
    };

    console.log(Days[day as keyof typeof Days] || 'error')
};

reverseDay('Monday');
reverseDay('no');