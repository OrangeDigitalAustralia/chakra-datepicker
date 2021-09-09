const __spreadArray =
    (this && this.__spreadArray) ||
    function (to, from, pack) {
        if (pack || arguments.length === 2)
            for (var i = 0, l = from.length, ar; i < l; i++) {
                if (ar || !(i in from)) {
                    if (!ar) ar = Array.prototype.slice.call(from, 0, i);
                    ar[i] = from[i];
                }
            }
        return to.concat(ar || Array.prototype.slice.call(from));
    };
Object.defineProperty(exports, "__esModule", { value: true });
exports.getDaysOfMonth = void 0;
function getDaysOfMonth(input) {
    const date = new Date(input);
    const year = date.getFullYear();
    const month = date.getMonth();
    const firstDayOfMonth = new Date(year, month, 1).getDay();
    const lastDateOfMonth = new Date(year, month + 1, 0).getDate();
    const lastDayOfMonth = new Date(year, month + 1, 0).getDay();
    const lastDayOfLastMonth = new Date(year, month, 0).getDate();
    const weeks = [];
    const firstWeekDiff = lastDayOfLastMonth - firstDayOfMonth;
    const daysInMonth =
        lastDateOfMonth + firstDayOfMonth + (7 - lastDayOfMonth);
    const numberOfWeeks = Math.round(daysInMonth / 7);
    __spreadArray([], new Array(numberOfWeeks), true).forEach(function (
        _,
        idx
    ) {
        let _a;
        let _b;
        let _c;
        let _d;
        const start =
            (_d =
                (_c =
                    (_b =
                        (_a =
                            weeks === null || weeks === void 0
                                ? void 0
                                : weeks[idx - 1]) === null || _a === void 0
                            ? void 0
                            : _a[6]) === null || _b === void 0
                        ? void 0
                        : _b.getDate) === null || _c === void 0
                    ? void 0
                    : _c.call(_b)) !== null && _d !== void 0
                ? _d
                : firstWeekDiff;
        const week = __spreadArray([], new Array(7), true).map(function (
            __,
            jdx
        ) {
            // First week of month
            if (idx === 0) {
                if (jdx >= firstDayOfMonth) {
                    return new Date(year, month, jdx - firstDayOfMonth + 1);
                }

                return new Date(
                    year,
                    month - 1,
                    lastDayOfLastMonth - (firstDayOfMonth - jdx - 1)
                );
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
        .reduce(function (a, v) {
            return a.concat(v);
        }, [])
        .reduce(
            function (a, v, idx) {
                a[idx % 7].push(v);
                return a;
            },
            [[], [], [], [], [], [], []]
        );
}
exports.getDaysOfMonth = getDaysOfMonth;
