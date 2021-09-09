import React, { createContext, useContext, useState } from 'react';

type StateType<T> = [T, React.Dispatch<React.SetStateAction<T>>];
type ContextType = {
    date: StateType<Date | null>;
    selectedDate: StateType<Date | null>;
    time: StateType<number>;
    selectingYear: StateType<boolean>;
    isTime: boolean;
    yearScrollIndex: StateType<number>;
};

export const DatePickerContext = createContext<ContextType>({} as any);

export const useDatePicker = () => useContext(DatePickerContext);

interface Props {
    time?: boolean;
    initialValue?: Date;
}

export const DatePickerProvider: React.FC<Props> = ({
    time: isTime,
    initialValue = null,
    children,
}) => {
    // Stored as the JS date object
    const date = useState<Date | null>(initialValue);

    // Currently selected date
    const selectedDate = useState<Date | null>(initialValue);

    // Selecting the year & month rather than the day
    const selectingYear = useState(false);

    // Used to store the current index for the year view
    const yearScrollIndex = useState(0);

    // Stored as seconds after midnight
    const time = useState<number>(0);

    return (
        <DatePickerContext.Provider
            value={{
                date,
                selectedDate,
                selectingYear,
                time,
                yearScrollIndex,
                isTime: !!isTime,
            }}
        >
            {children}
        </DatePickerContext.Provider>
    );
};
