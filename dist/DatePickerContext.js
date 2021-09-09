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
exports.DatePickerProvider =
    exports.useDatePicker =
    exports.DatePickerContext =
        void 0;
const react_1 = __importStar(require("react"));

exports.DatePickerContext = (0, react_1.createContext)({});
const useDatePicker = function () {
    return (0, react_1.useContext)(exports.DatePickerContext);
};
exports.useDatePicker = useDatePicker;
const DatePickerProvider = function (_a) {
    const isTime = _a.time;
    const _b = _a.initialValue;
    const initialValue = _b === void 0 ? null : _b;
    const { children } = _a;
    // Stored as the JS date object
    const date = (0, react_1.useState)(initialValue);
    // Currently selected date
    const selectedDate = (0, react_1.useState)(initialValue);
    // Stored as seconds after midnight
    const time = (0, react_1.useState)(0);
    return react_1.default.createElement(
        exports.DatePickerContext.Provider,
        {
            value: {
                date,
                selectedDate,
                time,
                isTime: !!isTime,
            },
        },
        children
    );
};
exports.DatePickerProvider = DatePickerProvider;
