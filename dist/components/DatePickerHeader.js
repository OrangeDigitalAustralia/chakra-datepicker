"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DatePickerHeader = void 0;
var react_1 = require("@chakra-ui/react");
var react_2 = __importDefault(require("react"));
var io5_1 = require("react-icons/io5");
var DatePickerContext_1 = require("../DatePickerContext");
var DatePickerHeader = function () {
    var context = (0, DatePickerContext_1.useDatePicker)();
    var _a = context.date, _date = _a[0], setDate = _a[1];
    var date = _date || new Date();
    var month = date.getMonth();
    var year = date.getFullYear();
    var onMonthChange = function (dir) { return function () {
        var terminator = dir === 'backward' ? 0 : 11;
        var adder = dir === 'backward' ? -1 : 1;
        if (month === terminator) {
            date.setFullYear(year + adder, Math.abs(11 - month));
        }
        else {
            date.setMonth(month + adder);
        }
        setDate(new Date(date));
    }; };
    return (react_2.default.createElement(react_2.default.Fragment, null,
        react_2.default.createElement(react_1.Flex, { alignItems: "center", my: 2 },
            react_2.default.createElement(react_1.Box, null,
                react_2.default.createElement(react_1.IconButton, { icon: react_2.default.createElement(io5_1.IoCaretBack, null), size: "sm", "aria-label": "previous month", onClick: onMonthChange('backward') })),
            react_2.default.createElement(react_1.Flex, { flex: "1", justifyContent: "center", fontWeight: "bold", fontSize: "large" },
                MONTH_NAMES[date.getMonth()],
                " ",
                date.getFullYear()),
            react_2.default.createElement(react_1.Box, null,
                react_2.default.createElement(react_1.IconButton, { icon: react_2.default.createElement(io5_1.IoCaretForward, null), size: "sm", "aria-label": "next month", onClick: onMonthChange('forward') }))),
        react_2.default.createElement(react_1.Divider, null)));
};
exports.DatePickerHeader = DatePickerHeader;
var MONTH_NAMES = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
];
