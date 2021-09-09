export function getNearbyYears(date: Date, n = 18): Date[] {
    // n=18 is 3 rows of 6
    const currentYear = date.getFullYear();
    const offset = Math.floor((currentYear - 2000) / n);
    const startValue = 2000 + offset * n;
    return [...new Array(n)].map(
        (_, idx) => new Date(startValue + idx, date.getMonth(), date.getDate())
    );
}
