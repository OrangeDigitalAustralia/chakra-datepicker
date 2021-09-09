"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DatePickerContainer = void 0;
var react_1 = require("@chakra-ui/react");
var react_2 = __importDefault(require("react"));
var DatePickerDays_1 = require("./components/DatePickerDays");
var DatePickerHeader_1 = require("./components/DatePickerHeader");
var DatePickerContext_1 = require("./DatePickerContext");
var DatePickerContainer = function (props) {
    var popover = (0, react_1.usePopover)();
    var date = (0, DatePickerContext_1.useDatePicker)().selectedDate[0];
    var value = (date === null || date === void 0 ? void 0 : date.getTime()) === 0 ? '' : date === null || date === void 0 ? void 0 : date.toLocaleDateString();
    var onFocus = function () { var _a, _b, _c; return (_c = (_b = (_a = popover === null || popover === void 0 ? void 0 : popover.getTriggerProps) === null || _a === void 0 ? void 0 : _a.call(popover)) === null || _b === void 0 ? void 0 : _b.onClick) === null || _c === void 0 ? void 0 : _c.call(_b, null); };
    return (react_2.default.createElement(react_2.default.Fragment, null,
        react_2.default.createElement(react_1.PopoverTrigger, null,
            react_2.default.createElement(react_1.Input, { size: "lg", value: value, onFocus: onFocus })),
        react_2.default.createElement(react_1.PopoverContent, { width: "auto" },
            react_2.default.createElement(react_1.PopoverArrow, null),
            react_2.default.createElement(react_1.PopoverBody, null,
                react_2.default.createElement(react_1.Flex, { direction: "column" },
                    react_2.default.createElement(DatePickerHeader_1.DatePickerHeader, null),
                    react_2.default.createElement(DatePickerDays_1.DatePickerDays, null))))));
};
exports.DatePickerContainer = DatePickerContainer;
