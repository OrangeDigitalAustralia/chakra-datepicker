export function getWeeksOfMonth(input: Date): Date[][] {
    const date = new Date(input);
    const year = date.getFullYear();
    const month = date.getMonth();

    const firstDayOfMonth = new Date(year, month, 1).getDay();
    const lastDateOfMonth = new Date(year, month + 1, 0).getDate();
    const lastDayOfMonth = new Date(year, month + 1, 0).getDay();
    const lastDayOfLastMonth = new Date(year, month, 0).getDate();

    const weeks: Date[][] = [];
    const firstWeekDiff = lastDayOfLastMonth - firstDayOfMonth;
    const daysInMonth =
        lastDateOfMonth + firstDayOfMonth + (7 - lastDayOfMonth);
    const numberOfWeeks = Math.round(daysInMonth / 7);

    [...new Array(numberOfWeeks)].forEach((_, idx) => {
        const start = weeks?.[idx - 1]?.[6]?.getDate?.() ?? firstWeekDiff;
        const week = [...new Array(7)].map((__, jdx) => {
            // First week of month
            if (idx === 0) {
                if (jdx >= firstDayOfMonth) {
                    return new Date(year, month, jdx - firstDayOfMonth + 1);
                } else {
                    return new Date(
                        year,
                        month - 1,
                        lastDayOfLastMonth - (firstDayOfMonth - jdx - 1)
                    );
                }
            }
            // Last week of month
            if (start + 1 + jdx > lastDateOfMonth) {
                return new Date(
                    year,
                    month + 1,
                    start + 1 + jdx - lastDateOfMonth
                );
            }

            // Any other day
            return new Date(year, month, start + 1 + jdx);
        });

        weeks.push(week);
    });

    return weeks
        .reduce((a, v) => a.concat(v), [])
        .reduce(
            (a, v, idx) => {
                a[idx % 7].push(v);
                return a;
            },
            [[], [], [], [], [], [], []] as Date[][]
        );
}
