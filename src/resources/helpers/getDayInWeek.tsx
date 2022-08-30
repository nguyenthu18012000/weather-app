export const getDayWeek = (day: string) => {
    const date = new Date(day);
    const nowDay = date.getDay();
    switch (nowDay) {
        case 1:
            return 'MonDay';
        case 2:
            return 'Tuesday';
        case 3:
            return 'Wednesday';
        case 4:
            return 'Thusday';
        case 5:
            return 'Friday';
        case 6:
            return 'Saturday';
        default:
            return 'Sunday';
    };
}