export function getMonths(date: Date) {
    const currentYear = date.getFullYear();
    const currentDate = date.getDate();
    return [...new Array(12)].map(
        (_, idx) => new Date(currentYear, idx, currentDate)
    );
}
