import {
    Flex,
    Input,
    PopoverArrow,
    PopoverBody,
    PopoverContent,
    PopoverTrigger,
    usePopover,
} from '@chakra-ui/react';
import React, { useEffect } from 'react';
import { DatePickerContent } from './components/DatePickerContent';
import { DatePickerHeader } from './components/DatePickerHeader';
import { useDatePicker } from './DatePickerContext';
import { DatePickerProps } from './props';

export const DatePickerContainer: React.FC<DatePickerProps> = (props) => {
    const popover = usePopover();
    const {
        selectedDate: [date],
    } = useDatePicker();

    const value = date?.getTime() === 0 ? '' : date?.toLocaleDateString();
    const onFocus = () => popover?.getTriggerProps?.()?.onClick?.(null as any);

    const onChange = () => {
        props.onDateChange?.(date);
    };

    useEffect(() => {
        onChange()
    }, [date]);

    return (
        <>
            <PopoverTrigger>
                <Input
                    size="lg"
                    value={value}
                    onFocus={onFocus}
                    onChange={onChange}
                />
            </PopoverTrigger>
            <PopoverContent width="auto">
                <PopoverArrow />
                <PopoverBody>
                    <Flex direction="column">
                        <DatePickerHeader />
                        <DatePickerContent />
                    </Flex>
                </PopoverBody>
            </PopoverContent>
        </>
    );
};
