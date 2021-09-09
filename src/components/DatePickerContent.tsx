import React from 'react';
import { useDatePicker } from '../DatePickerContext';
import { DatePickerDays } from './DatePickerDays';
import { DatePickerYears } from './DatePickerYears';

export const DatePickerContent = () => {
    const context = useDatePicker();

    if (!context.selectingYear[0]) {
        return <DatePickerDays />;
    } else {
        return <DatePickerYears />;
    }
};
