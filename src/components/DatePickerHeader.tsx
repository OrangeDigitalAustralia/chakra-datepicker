import { Box, Divider, Flex, IconButton } from '@chakra-ui/react';
import React from 'react';
import { IoCaretBack, IoCaretForward } from 'react-icons/io5';
import { useDatePicker } from '../DatePickerContext';

export const DatePickerHeader = () => {
    const context = useDatePicker();
    const [_date, setDate] = context.date;

    const date = _date || new Date();

    const month = date.getMonth();
    const year = date.getFullYear();

    const onMonthChange = (dir: 'forward' | 'backward') => () => {
        const terminator = dir === 'backward' ? 0 : 11;
        const adder = dir === 'backward' ? -1 : 1;

        if (month === terminator) {
            date.setFullYear(year + adder, Math.abs(11 - month));
        } else {
            date.setMonth(month + adder);
        }

        setDate(new Date(date));
    };

    return (
        <>
            <Flex alignItems="center" my={2}>
                <Box>
                    <IconButton
                        icon={<IoCaretBack />}
                        size="sm"
                        aria-label="previous month"
                        onClick={onMonthChange('backward')}
                    />
                </Box>
                <Flex
                    flex="1"
                    justifyContent="center"
                    fontWeight="bold"
                    fontSize="large"
                >
                    {MONTH_NAMES[date.getMonth()]} {date.getFullYear()}
                </Flex>
                <Box>
                    <IconButton
                        icon={<IoCaretForward />}
                        size="sm"
                        aria-label="next month"
                        onClick={onMonthChange('forward')}
                    />
                </Box>
            </Flex>
            <Divider />
        </>
    );
};

const MONTH_NAMES = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
];
