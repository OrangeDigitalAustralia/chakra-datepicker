import { Divider, HStack } from '@chakra-ui/react';
import React, { useMemo } from 'react';
import { useDatePicker } from '../DatePickerContext';
import { getMonths } from '../helpers/getMonths';
import { getNearbyYears } from '../helpers/getNearbyYears';
import { DateColumnGroup } from './DateColumnGroup';

export const DatePickerYears = () => {
    const context = useDatePicker();
    const [date] = context.date;
    const [yearsIndex] = context.yearScrollIndex;

    const yearsSize = 24;
    const years = useMemo(
        () =>
            getNearbyYears(
                new Date(2000 + yearsIndex * yearsSize, 0),
                yearsSize
            ),
        [yearsIndex]
    );
    const months = useMemo(() => getMonths(date || new Date()), [date]);

    return (
        <HStack>
            <DateColumnGroup
                title="Months"
                dates={months}
                columnSize={6}
                months
            />
            <Divider orientation="vertical" h="auto" alignSelf="stretch" />
            <DateColumnGroup
                title="Years"
                subtitle={`(${years[0].getFullYear()} - ${years[
                    years.length - 1
                ].getFullYear()})`}
                dates={years}
                columnSize={6}
                years
            />
        </HStack>
    );
};
