const __importDefault =
    (this && this.__importDefault) ||
    function (mod) {
        return mod && mod.__esModule ? mod : { default: mod };
    };
Object.defineProperty(exports, "__esModule", { value: true });
exports.DatePickerHeader = void 0;
const react_1 = require("@chakra-ui/react");
const react_2 = __importDefault(require("react"));
const io5_1 = require("react-icons/io5");
const DatePickerContext_1 = require("../DatePickerContext");

const DatePickerHeader = function () {
    const context = (0, DatePickerContext_1.useDatePicker)();
    const _a = context.date;
    const _date = _a[0];
    const setDate = _a[1];
    const date = _date || new Date();
    const month = date.getMonth();
    const year = date.getFullYear();
    const onMonthChange = function (dir) {
        return function () {
            const terminator = dir === "backward" ? 0 : 11;
            const adder = dir === "backward" ? -1 : 1;
            if (month === terminator) {
                date.setFullYear(year + adder, Math.abs(11 - month));
            } else {
                date.setMonth(month + adder);
            }
            setDate(new Date(date));
        };
    };
    return react_2.default.createElement(
        react_2.default.Fragment,
        null,
        react_2.default.createElement(
            react_1.Flex,
            { alignItems: "center", my: 2 },
            react_2.default.createElement(
                react_1.Box,
                null,
                react_2.default.createElement(react_1.IconButton, {
                    icon: react_2.default.createElement(
                        io5_1.IoCaretBack,
                        null
                    ),
                    size: "sm",
                    "aria-label": "previous month",
                    onClick: onMonthChange("backward"),
                })
            ),
            react_2.default.createElement(
                react_1.Flex,
                {
                    flex: "1",
                    justifyContent: "center",
                    fontWeight: "bold",
                    fontSize: "large",
                },
                MONTH_NAMES[date.getMonth()],
                " ",
                date.getFullYear()
            ),
            react_2.default.createElement(
                react_1.Box,
                null,
                react_2.default.createElement(react_1.IconButton, {
                    icon: react_2.default.createElement(
                        io5_1.IoCaretForward,
                        null
                    ),
                    size: "sm",
                    "aria-label": "next month",
                    onClick: onMonthChange("forward"),
                })
            )
        ),
        react_2.default.createElement(react_1.Divider, null)
    );
};
exports.DatePickerHeader = DatePickerHeader;
var MONTH_NAMES = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
];
