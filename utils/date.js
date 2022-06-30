export function getFomattedDate(date) {
    return `${date.getYear()}-${date.getMonth() + 1}-${date.getDate()}`;
}

export function getDateMinusDays(date, days) {
    return new Date(date.getYear(), date.getMonth(), date.getDate() - days);
}

console.log(getDateMinusDays(new Date(), 7)());