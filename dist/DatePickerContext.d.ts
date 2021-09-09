import React from 'react';
declare type StateType<T> = [T, React.Dispatch<React.SetStateAction<T>>];
declare type ContextType = {
    date: StateType<Date | null>;
    selectedDate: StateType<Date | null>;
    time: StateType<number>;
    isTime: boolean;
};
export declare const DatePickerContext: React.Context<ContextType>;
export declare const useDatePicker: () => ContextType;
interface Props {
    time?: boolean;
    initialValue?: Date;
}
export declare const DatePickerProvider: React.FC<Props>;
export {};
