"use strict";
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
exports.DatePickerProvider = exports.useDatePicker = exports.DatePickerContext = void 0;
var react_1 = __importStar(require("react"));
exports.DatePickerContext = (0, react_1.createContext)({});
var useDatePicker = function () { return (0, react_1.useContext)(exports.DatePickerContext); };
exports.useDatePicker = useDatePicker;
var DatePickerProvider = function (_a) {
    var isTime = _a.time, _b = _a.initialValue, initialValue = _b === void 0 ? null : _b, children = _a.children;
    // Stored as the JS date object
    var date = (0, react_1.useState)(initialValue);
    // Currently selected date
    var selectedDate = (0, react_1.useState)(initialValue);
    // Stored as seconds after midnight
    var time = (0, react_1.useState)(0);
    return (react_1.default.createElement(exports.DatePickerContext.Provider, { value: { date: date, selectedDate: selectedDate, time: time, isTime: !!isTime } }, children));
};
exports.DatePickerProvider = DatePickerProvider;
