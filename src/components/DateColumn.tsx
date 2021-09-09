import { Box, Button, Flex } from '@chakra-ui/react';
import React, { useMemo } from 'react';
import { useDatePicker } from '../DatePickerContext';
import { DateColumnArithemetic } from '../helpers/dateColumnArithmentic';

interface ColumnProps {
    dates: Date[];
    title?: string;
    months?: boolean;
    years?: boolean;
}

export const DateColumn: React.FC<ColumnProps> = ({
    dates,
    title,
    months = false,
    years = false,
}) => {
    const context = useDatePicker();
    const [date, setDate] = context.date;
    const [selectedDate, setSelectedDate] = context.selectedDate;

    const helpers = useMemo(
        () =>
            new DateColumnArithemetic(dates, date, selectedDate, years, months),
        [dates, date, selectedDate, years, months]
    );

    const handleSelect = (n: Date) => () => {
        if (months) {
            selectedDate?.setFullYear(
                date?.getFullYear() || new Date().getFullYear()
            );
            selectedDate?.setMonth(n.getMonth());
            setSelectedDate(new Date(selectedDate || new Date()));
            setDate(new Date(selectedDate || new Date()));
        } else if (years) {
            date?.setFullYear(n.getFullYear());
            setDate(new Date(date || new Date()));
        } else {
            setSelectedDate(new Date(n));
            setDate(new Date(n));
        }
    };

    return (
        <Flex
            direction="column"
            flex-basis="0"
            justifyContent="center"
            spacing="2"
        >
            {Boolean(title) && (
                <Box my={2} textAlign="center" fontWeight="semibold">
                    {title}
                </Box>
            )}
            {dates.map((n, i) => (
                <Button
                    key={i}
                    mt={i > 0 ? '2' : undefined}
                    size="sm"
                    onClick={handleSelect(n)}
                    variant={helpers.selected(n) ? 'solid' : 'ghost'}
                    colorScheme={helpers.selected(n) ? 'teal' : undefined}
                    color={helpers.outOfMonth(i, n) ? 'gray.400' : undefined}
                >
                    {helpers.getButtonText(n)}
                </Button>
            ))}
        </Flex>
    );
};
