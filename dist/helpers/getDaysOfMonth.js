"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
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
    var date = new Date(input);
    var year = date.getFullYear();
    var month = date.getMonth();
    var firstDayOfMonth = new Date(year, month, 1).getDay();
    var lastDateOfMonth = new Date(year, month + 1, 0).getDate();
    var lastDayOfMonth = new Date(year, month + 1, 0).getDay();
    var lastDayOfLastMonth = new Date(year, month, 0).getDate();
    var weeks = [];
    var firstWeekDiff = lastDayOfLastMonth - firstDayOfMonth;
    var daysInMonth = lastDateOfMonth + firstDayOfMonth + (7 - lastDayOfMonth);
    var numberOfWeeks = Math.round(daysInMonth / 7);
    __spreadArray([], new Array(numberOfWeeks), true).forEach(function (_, idx) {
        var _a, _b, _c, _d;
        var start = (_d = (_c = (_b = (_a = weeks === null || weeks === void 0 ? void 0 : weeks[idx - 1]) === null || _a === void 0 ? void 0 : _a[6]) === null || _b === void 0 ? void 0 : _b.getDate) === null || _c === void 0 ? void 0 : _c.call(_b)) !== null && _d !== void 0 ? _d : firstWeekDiff;
        var week = __spreadArray([], new Array(7), true).map(function (__, jdx) {
            // First week of month
            if (idx === 0) {
                if (jdx >= firstDayOfMonth) {
                    return new Date(year, month, jdx - firstDayOfMonth + 1);
                }
                else {
                    return new Date(year, month - 1, lastDayOfLastMonth - (firstDayOfMonth - jdx - 1));
                }
            }
            // Last week of month
            if (start + 1 + jdx > lastDateOfMonth) {
                return new Date(year, month + 1, start + 1 + jdx - lastDateOfMonth);
            }
            // Any other day
            return new Date(year, month, start + 1 + jdx);
        });
        weeks.push(week);
    });
    return weeks
        .reduce(function (a, v) { return a.concat(v); }, [])
        .reduce(function (a, v, idx) {
        a[idx % 7].push(v);
        return a;
    }, [[], [], [], [], [], [], []]);
}
exports.getDaysOfMonth = getDaysOfMonth;
