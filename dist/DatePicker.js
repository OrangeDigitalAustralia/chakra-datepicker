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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DatePicker = void 0;
var react_1 = require("@chakra-ui/react");
var react_2 = __importDefault(require("react"));
var DatePickerContainer_1 = require("./DatePickerContainer");
var DatePickerContext_1 = require("./DatePickerContext");
var DatePicker = function (props) {
    return (react_2.default.createElement(DatePickerContext_1.DatePickerProvider, { initialValue: props.initialValue, time: props.time },
        react_2.default.createElement(react_1.Popover, { placement: "bottom-start" },
            react_2.default.createElement(DatePickerContainer_1.DatePickerContainer, __assign({}, props)))));
};
exports.DatePicker = DatePicker;
