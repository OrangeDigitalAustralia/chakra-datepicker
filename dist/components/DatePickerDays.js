var __assign =
    (this && this.__assign) ||
    function () {
        __assign =
            Object.assign ||
            function (t) {
                for (var s, i = 1, n = arguments.length; i < n; i++) {
                    s = arguments[i];
                    for (const p in s)
                        if (Object.prototype.hasOwnProperty.call(s, p))
                            t[p] = s[p];
                }
                return t;
            };
        return __assign.apply(this, arguments);
    };
const __createBinding =
    (this && this.__createBinding) ||
    (Object.create
        ? function (o, m, k, k2) {
              if (k2 === undefined) k2 = k;
              Object.defineProperty(o, k2, {
                  enumerable: true,
                  get() {
                      return m[k];
                  },
              });
          }
        : function (o, m, k, k2) {
              if (k2 === undefined) k2 = k;
              o[k2] = m[k];
          });
const __setModuleDefault =
    (this && this.__setModuleDefault) ||
    (Object.create
        ? function (o, v) {
              Object.defineProperty(o, "default", {
                  enumerable: true,
                  value: v,
              });
          }
        : function (o, v) {
              o.default = v;
          });
const __importStar =
    (this && this.__importStar) ||
    function (mod) {
        if (mod && mod.__esModule) return mod;
        const result = {};
        if (mod != null)
            for (const k in mod)
                if (
                    k !== "default" &&
                    Object.prototype.hasOwnProperty.call(mod, k)
                )
                    __createBinding(result, mod, k);
        __setModuleDefault(result, mod);
        return result;
    };
Object.defineProperty(exports, "__esModule", { value: true });
exports.DatePickerDays = void 0;
const react_1 = require("@chakra-ui/react");
const react_2 = __importStar(require("react"));
const DatePickerContext_1 = require("../DatePickerContext");
const getDaysOfMonth_1 = require("../helpers/getDaysOfMonth");

const Column = function (_a) {
    const { dates } = _a;
    const { title } = _a;
    const context = (0, DatePickerContext_1.useDatePicker)();
    const _b = context.selectedDate;
    const date = _b[0];
    const setDate = _b[1];
    const handleSelect = function (n) {
        return function () {
            setDate(new Date(n));
        };
    };
    const selected = function (n) {
        return (
            (date === null || date === void 0 ? void 0 : date.getTime()) ===
            n.getTime()
        );
    };
    const outOfMonth = function (i, n) {
        return (
            (i === 0 && n.getDate() > 7) ||
            (i === dates.length - 1 && n.getDate() <= 7)
        );
    };
    return react_2.default.createElement(
        react_1.Flex,
        {
            direction: "column",
            "flex-basis": "0",
            justifyContent: "center",
            spacing: "2",
        },
        react_2.default.createElement(
            react_1.Box,
            { my: 2, textAlign: "center", fontWeight: "semibold" },
            title
        ),
        dates.map(function (n, i) {
            return react_2.default.createElement(
                react_1.Button,
                {
                    key: i,
                    mt: i > 0 ? "2" : undefined,
                    size: "sm",
                    onClick: handleSelect(n),
                    variant: selected(n) ? "solid" : "ghost",
                    color: outOfMonth(i, n) ? "gray.400" : undefined,
                },
                n.getDate()
            );
        })
    );
};
const WeekColumns = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"];
const DatePickerDays = function () {
    const context = (0, DatePickerContext_1.useDatePicker)();
    const date = context.date[0];
    const _a = (0, react_2.useState)();
    const weeks = _a[0];
    const setWeeks = _a[1];
    (0, react_2.useEffect)(
        function () {
            setWeeks((0, getDaysOfMonth_1.getDaysOfMonth)(date || new Date()));
        },
        [date]
    );
    return react_2.default.createElement(
        react_1.HStack,
        null,
        WeekColumns.map(function (title, idx) {
            let _a;
            return react_2.default.createElement(Column, {
                key: idx,
                title,
                dates:
                    (_a =
                        weeks === null || weeks === void 0
                            ? void 0
                            : weeks[idx]) !== null && _a !== void 0
                        ? _a
                        : [],
            });
        })
    );
};
exports.DatePickerDays = DatePickerDays;
