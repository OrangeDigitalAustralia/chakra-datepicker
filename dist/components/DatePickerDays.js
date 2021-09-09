"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DatePickerDays = void 0;
var react_1 = require("@chakra-ui/react");
var react_2 = __importStar(require("react"));
var DatePickerContext_1 = require("../DatePickerContext");
var getDaysOfMonth_1 = require("../helpers/getDaysOfMonth");
var Column = function (_a) {
    var dates = _a.dates, title = _a.title;
    var context = (0, DatePickerContext_1.useDatePicker)();
    var _b = context.selectedDate, date = _b[0], setDate = _b[1];
    var handleSelect = function (n) { return function () {
        setDate(new Date(n));
    }; };
    var selected = function (n) { return (date === null || date === void 0 ? void 0 : date.getTime()) === n.getTime(); };
    var outOfMonth = function (i, n) {
        return (i === 0 && n.getDate() > 7) ||
            (i === dates.length - 1 && n.getDate() <= 7);
    };
    return (react_2.default.createElement(react_1.Flex, { direction: "column", "flex-basis": "0", justifyContent: "center", spacing: "2" },
        react_2.default.createElement(react_1.Box, { my: 2, textAlign: "center", fontWeight: "semibold" }, title),
        dates.map(function (n, i) { return (react_2.default.createElement(react_1.Button, { key: i, mt: i > 0 ? '2' : undefined, size: "sm", onClick: handleSelect(n), variant: selected(n) ? 'solid' : 'ghost', color: outOfMonth(i, n) ? 'gray.400' : undefined }, n.getDate())); })));
};
var WeekColumns = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'];
var DatePickerDays = function () {
    var context = (0, DatePickerContext_1.useDatePicker)();
    var date = context.date[0];
    var _a = (0, react_2.useState)(), weeks = _a[0], setWeeks = _a[1];
    (0, react_2.useEffect)(function () {
        setWeeks((0, getDaysOfMonth_1.getDaysOfMonth)(date || new Date()));
    }, [date]);
    return (react_2.default.createElement(react_1.HStack, null, WeekColumns.map(function (title, idx) {
        var _a;
        return (react_2.default.createElement(Column, __assign({ key: idx }, { title: title }, { dates: (_a = weeks === null || weeks === void 0 ? void 0 : weeks[idx]) !== null && _a !== void 0 ? _a : [] })));
    })));
};
exports.DatePickerDays = DatePickerDays;
