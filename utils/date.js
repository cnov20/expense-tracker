export function getFomattedDate(date) {
    return `${date.getYear()}-${date.getMonth() + 1}-${date.getDate()}`;
}