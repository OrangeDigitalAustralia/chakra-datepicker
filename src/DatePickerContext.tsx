import React, { createContext, useContext, useState } from 'react';

type StateType<T> = [T, React.Dispatch<React.SetStateAction<T>>];
type ContextType = {
    date: StateType<Date | null>;
    selectedDate: StateType<Date | null>;
    time: StateType<number>;
    isTime: boolean;
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

    // Stored as seconds after midnight
    const time = useState<number>(0);

    return (
        <DatePickerContext.Provider
            value={{ date, selectedDate, time, isTime: !!isTime }}
        >
            {children}
        </DatePickerContext.Provider>
    );
};
