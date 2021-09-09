import { Box, Button, Flex, HStack } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import { useDatePicker } from '../DatePickerContext';
import { getDaysOfMonth } from '../helpers/getDaysOfMonth';

interface ColumnProps {
    dates: Date[];
    title: string;
}

const Column: React.FC<ColumnProps> = ({ dates, title }) => {
    const context = useDatePicker();
    const [date, setDate] = context.selectedDate;

    const handleSelect = (n: Date) => () => {
        setDate(new Date(n));
    };

    const selected = (n: Date) => date?.getTime() === n.getTime();
    const outOfMonth = (i: number, n: Date) =>
        (i === 0 && n.getDate() > 7) ||
        (i === dates.length - 1 && n.getDate() <= 7);

    return (
        <Flex
            direction="column"
            flex-basis="0"
            justifyContent="center"
            spacing="2"
        >
            <Box my={2} textAlign="center" fontWeight="semibold">
                {title}
            </Box>
            {dates.map((n, i) => (
                <Button
                    key={i}
                    mt={i > 0 ? '2' : undefined}
                    size="sm"
                    onClick={handleSelect(n)}
                    variant={selected(n) ? 'solid' : 'ghost'}
                    color={outOfMonth(i, n) ? 'gray.400' : undefined}
                >
                    {n.getDate()}
                </Button>
            ))}
        </Flex>
    );
};

const WeekColumns = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'];
export const DatePickerDays = () => {
    const context = useDatePicker();
    const [date] = context.date;
    const [weeks, setWeeks] = useState<Date[][]>();

    useEffect(() => {
        setWeeks(getDaysOfMonth(date || new Date()));
    }, [date]);

    return (
        <HStack>
            {WeekColumns.map((title, idx) => (
                <Column key={idx} {...{ title }} dates={weeks?.[idx] ?? []} />
            ))}
        </HStack>
    );
};
